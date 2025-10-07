import { CircleNotch, XCircle } from '@phosphor-icons/react';
import { useForm } from '@tanstack/react-form';
import { useSendEmail } from '@services/email/hooks/useSendEmail';
import z from 'zod';
import { toast, Toaster } from 'sonner';
import { CheckCircle } from '@phosphor-icons/react/dist/ssr';

const contactFormSchema = z.object({
  name: z.string().nonempty(),
  email: z.email(),
  message: z.string().min(10)
});

function ContactFormBlock() {
  const { handleSendEmail, status } = useSendEmail();
  const form = useForm({
    onSubmit: handleSubmit,
    defaultValues: {
      name: '',
      email: '',
      message: ''
    },
    validators: {
      onChange: contactFormSchema
    }
  });

  async function handleSubmit({
    value
  }: {
    value: z.infer<typeof contactFormSchema>;
  }) {
    handleSendEmail(
      {
        email: value.email,
        message: value.message
      },
      {
        onSuccess: () => {
          toast('Email sent successfully', {
            icon: <CheckCircle size={18} weight="fill" />
          });
        },
        onError: (err) => {
          toast(err.message, {
            icon: <XCircle size={18} weight="fill" />
          });
        }
      }
    );
  }

  return (
    <div>
      <h2 className="text-2xl font-semibold text-gray-700">Contact us</h2>
      <form
        className="flex gap-6 flex-col mt-6"
        onSubmit={(e) => {
          e.preventDefault();
          form.handleSubmit();
        }}
      >
        <div className="flex gap-2 flex-col">
          <label className="text-sm font-semibold text-zinc-800" htmlFor="name">
            Name
          </label>
          <form.Field
            name="name"
            children={(fieldName) => (
              <>
                <input
                  type="text"
                  id={fieldName.name}
                  name={fieldName.name}
                  className="form-input border-gray-200 rounded-md"
                  onChange={(e) => fieldName.handleChange(e.target.value)}
                />
                {!fieldName.state.meta.isValid && (
                  <span className="text-red-500 text-xs font-semibold">
                    {fieldName.state.meta.errors[0]?.message ?? ''}
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
            children={(fieldEmail) => (
              <>
                <input
                  type="email"
                  id={fieldEmail.name}
                  name={fieldEmail.name}
                  className="form-input border-gray-200 rounded-md"
                  onChange={(e) => fieldEmail.handleChange(e.target.value)}
                />
                {!fieldEmail.state.meta.isValid && (
                  <span className="text-red-500 text-xs font-semibold">
                    {fieldEmail.state.meta.errors[0]?.message ?? ''}
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
            children={(fieldMessage) => (
              <>
                <textarea
                  id={fieldMessage.name}
                  name={fieldMessage.name}
                  className="form-input border-gray-200 rounded-md"
                  onChange={(e) => fieldMessage.handleChange(e.target.value)}
                />
                {!fieldMessage.state.meta.isValid && (
                  <span className="text-red-500 text-xs font-semibold">
                    {fieldMessage.state.meta.errors[0]?.message ?? ''}
                  </span>
                )}
              </>
            )}
          />
        </div>

        <button
          className="flex gap-4 items-center justify-center bg-zinc-900 text-white rounded-md px-4 py-2 hover:bg-zinc-800 transition-colors"
          type="submit"
        >
          Send message
          {status === 'pending' && (
            <CircleNotch size={18} weight="regular" className="animate-spin" />
          )}
        </button>
      </form>
      <Toaster />
    </div>
  );
}

export { ContactFormBlock };
