import { useForm } from '@tanstack/react-form';
import { FormEvent } from 'react';
import { IEmailResponse } from 'src/services/email/IEmailRepository';
import z from 'zod';

const contactFormSchema = z.object({
  name: z.string(),
  email: z.email(),
  message: z.string().min(10)
});

function ContactFormBlock() {
  const form = useForm({
    onSubmit: handleSubmit,
    validators: {
      onChange: contactFormSchema
    }
  });

  async function handleSubmit({
    value
  }: {
    value: z.infer<typeof contactFormSchema>;
  }) {
    try {
      const response: IEmailResponse = await fetch(
        'http://localhost:3000/api/sendmail',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            email: value.email,
            message: value.message
          })
        }
      );

      if (response.success) {
        alert('OK');
      }
    } catch (err) {
      alert(err.message);
      console.error(err);
    }
  }

  return (
    <div>
      <h2 className="text-2xl font-semibold text-gray-700">Contact us</h2>
      <form
        className="flex gap-6 flex-col mt-6"
        onSubmit={() => {
          event?.preventDefault();
          form.handleSubmit();
        }}
      >
        <div className="flex gap-2 flex-col">
          <label className="text-sm font-semibold text-zinc-800" htmlFor="name">
            Name
          </label>
          <form.Field
            name="name"
            children={(field) => (
              <>
                <input
                  type="text"
                  id={field.name}
                  name={field.name}
                  className="form-input border-gray-200 rounded-md"
                  onBlur={field.handleBlur}
                  onChange={(e) => field.handleChange(e.target.value)}
                />
                {!field.state.meta.isValid && (
                  <span className="text-red-500 text-xs font-semibold">
                    {field.state.meta.errors[0]?.message ?? ''}
                  </span>
                )}
              </>
            )}
          />
        </div>

        <div className="flex gap-2 flex-col">
          <label
            className="text-sm font-semibold text-zinc-800"
            htmlFor="email"
          >
            Email
          </label>
          <form.Field
            name="email"
            children={(field) => (
              <>
                <input
                  type="email"
                  id={field.name}
                  name={field.name}
                  className="form-input border-gray-200 rounded-md"
                  onBlur={field.handleBlur}
                  onChange={(e) => field.handleChange(e.target.value)}
                />
                {!field.state.meta.isValid && (
                  <span className="text-red-500 text-xs font-semibold">
                    {field.state.meta.errors[0]?.message ?? ''}
                  </span>
                )}
              </>
            )}
          />
        </div>

        <div className="flex gap-2 flex-col">
          <label
            className="text-sm font-semibold text-zinc-800"
            htmlFor="email"
          >
            Message
          </label>
          <form.Field
            name="message"
            children={(field) => (
              <>
                <textarea
                  id={field.name}
                  name={field.name}
                  className="form-input border-gray-200 rounded-md"
                  onBlur={field.handleBlur}
                  onChange={(e) => field.handleChange(e.target.value)}
                />
                {!field.state.meta.isValid && (
                  <span className="text-red-500 text-xs font-semibold">
                    {field.state.meta.errors[0]?.message ?? ''}
                  </span>
                )}
              </>
            )}
          />
        </div>

        <button
          className="bg-zinc-900 text-white rounded-md px-4 py-2 hover:bg-zinc-800 transition-colors"
          type="submit"
        >
          Send message
        </button>
      </form>
    </div>
  );
}

export { ContactFormBlock };
