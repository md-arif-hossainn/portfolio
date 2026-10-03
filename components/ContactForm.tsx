'use client';

import { useState, type FormEvent } from 'react';
import { AlertCircle, CheckCircle2, Loader2, Send } from 'lucide-react';
import { validateContact, type FieldErrors } from '@/lib/validate';

type Status = 'idle' | 'submitting' | 'success' | 'error';

const initialValues = { name: '', email: '', message: '', company: '' };

export default function ContactForm() {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState<FieldErrors>({});
  const [status, setStatus] = useState<Status>('idle');
  const [formError, setFormError] = useState('');

  const update = (field: keyof typeof initialValues) => (value: string) => {
    setValues((prev) => ({ ...prev, [field]: value }));
    // Clear the field error as soon as the visitor starts fixing it.
    setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setFormError('');

    const nextErrors = validateContact(values);
    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      setStatus('error');
      return;
    }

    setStatus('submitting');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values),
      });
      const data = await res.json().catch(() => ({}));

      if (!res.ok || !data.ok) {
        setErrors(data.errors ?? {});
        setFormError(
          data.error ?? 'Could not send your message. Please try again.'
        );
        setStatus('error');
        return;
      }

      setValues(initialValues);
      setErrors({});
      setStatus('success');
    } catch {
      setFormError(
        'Network error — please check your connection and try again.'
      );
      setStatus('error');
    }
  }

  const submitting = status === 'submitting';

  return (
    <form onSubmit={handleSubmit} noValidate className="border-t border-line pt-8">
      <div className="space-y-7">
        <Field
          id="name"
          label="Name"
          value={values.name}
          onChange={update('name')}
          error={errors.name}
          autoComplete="name"
          placeholder="Jane Doe"
          disabled={submitting}
        />
        <Field
          id="email"
          label="Email"
          type="email"
          value={values.email}
          onChange={update('email')}
          error={errors.email}
          autoComplete="email"
          placeholder="jane@company.com"
          disabled={submitting}
        />
        <Field
          id="message"
          label="Message"
          value={values.message}
          onChange={update('message')}
          error={errors.message}
          placeholder="Tell me about the role or project…"
          disabled={submitting}
          multiline
        />

        {/* Honeypot — hidden from humans and assistive tech, catnip for bots. */}
        <div aria-hidden className="hidden">
          <label htmlFor="company">Company</label>
          <input
            id="company"
            name="company"
            type="text"
            tabIndex={-1}
            autoComplete="off"
            value={values.company}
            onChange={(e) => update('company')(e.target.value)}
          />
        </div>
      </div>

      <button
        type="submit"
        disabled={submitting}
        className="btn-primary mt-9 w-full sm:w-auto"
      >
        {submitting ? (
          <>
            <Loader2 size={17} aria-hidden className="animate-spin" />
            Sending…
          </>
        ) : (
          <>
            <Send size={17} aria-hidden />
            Send message
          </>
        )}
      </button>

      {/* Live region so screen readers announce the outcome. */}
      <div aria-live="polite" className="mt-4 empty:mt-0">
        {status === 'success' ? (
          <p className="flex items-start gap-2 border-l-2 border-emerald-600 py-1 pl-4 text-sm text-emerald-700 dark:border-emerald-400 dark:text-emerald-300">
            <CheckCircle2 size={17} aria-hidden className="mt-0.5 shrink-0" />
            Thanks — your message is on its way. I&apos;ll get back to you soon.
          </p>
        ) : null}

        {status === 'error' && formError ? (
          <p className="flex items-start gap-2 border-l-2 border-red-600 py-1 pl-4 text-sm text-red-700 dark:border-red-400 dark:text-red-300">
            <AlertCircle size={17} aria-hidden className="mt-0.5 shrink-0" />
            {formError}
          </p>
        ) : null}
      </div>
    </form>
  );
}

type FieldProps = {
  id: 'name' | 'email' | 'message';
  label: string;
  value: string;
  onChange: (value: string) => void;
  error?: string;
  type?: string;
  placeholder?: string;
  autoComplete?: string;
  disabled?: boolean;
  multiline?: boolean;
};

function Field({
  id,
  label,
  value,
  onChange,
  error,
  type = 'text',
  placeholder,
  autoComplete,
  disabled,
  multiline,
}: FieldProps) {
  const base = `w-full border-0 border-b bg-transparent px-0 py-2.5 text-ink placeholder:text-ink-subtle transition-colors focus:border-ink disabled:opacity-60 ${
    error ? 'border-red-500/70' : 'border-ink-subtle'
  }`;

  return (
    <div>
      <label htmlFor={id} className="meta block">
        {label}
      </label>
      {multiline ? (
        <textarea
          id={id}
          name={id}
          rows={5}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          disabled={disabled}
          required
          aria-invalid={Boolean(error)}
          aria-describedby={error ? `${id}-error` : undefined}
          className={`${base} mt-1 resize-y`}
        />
      ) : (
        <input
          id={id}
          name={id}
          type={type}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          autoComplete={autoComplete}
          disabled={disabled}
          required
          aria-invalid={Boolean(error)}
          aria-describedby={error ? `${id}-error` : undefined}
          className={`${base} mt-1`}
        />
      )}
      {error ? (
        <p
          id={`${id}-error`}
          className="mt-2 font-mono text-xs text-red-700 dark:text-red-300"
        >
          {error}
        </p>
      ) : null}
    </div>
  );
}
