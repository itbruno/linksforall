import { CircleNotch, PaperPlaneTilt, XCircle } from '@phosphor-icons/react';
import { useForm } from '@tanstack/react-form';
import { useSendEmail } from '@services/email/hooks/useSendEmail';
import z from 'zod';
import { toast } from 'sonner';
import { CheckCircle } from '@phosphor-icons/react/dist/ssr';

const contactFormSchema = z.object({
  name: z.string().nonempty(),
  email: z.email(),
  message: z.string().min(10)
});

function ContactFormBlock() {
  const { handleSendEmail, status } = useSendEmail();
  const form = useForm({
    defaultValues: {
      name: '',
      email: '',
      message: ''
    },
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
          form.reset();
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
    <div className="card p-6">
      <h2 className="heading-color text-2xl font-semibold">Contact us</h2>
      <form
        className="flex gap-6 flex-col mt-6"
        onSubmit={(e) => {
          e.preventDefault();
          form.handleSubmit();
        }}
      >
        <div className="flex gap-2 flex-col">
          <label className="form-label" htmlFor="name">
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
                  value={fieldName.state.value}
                  className="form-input"
                  onChange={(e) => fieldName.handleChange(e.target.value)}
                />
                {!fieldName.state.meta.isValid && (
                  <span className="form-message-error text-xs font-semibold">
                    {fieldName.state.meta.errors[0]?.message ?? ''}
                  </span>
                )}
              </>
            )}
          />
        </div>

        <div className="flex gap-2 flex-col">
          <label className="form-label" htmlFor="email">
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
                  value={fieldEmail.state.value}
                  className="form-input"
                  onChange={(e) => fieldEmail.handleChange(e.target.value)}
                />
                {!fieldEmail.state.meta.isValid && (
                  <span className="form-message-error">
                    {fieldEmail.state.meta.errors[0]?.message ?? ''}
                  </span>
                )}
              </>
            )}
          />
        </div>

        <div className="flex gap-2 flex-col">
          <label className="form-label" htmlFor="email">
            Message
          </label>
          <form.Field
            name="message"
            children={(fieldMessage) => (
              <>
                <textarea
                  id={fieldMessage.name}
                  name={fieldMessage.name}
                  value={fieldMessage.state.value}
                  className="form-input"
                  onChange={(e) => fieldMessage.handleChange(e.target.value)}
                />
                {!fieldMessage.state.meta.isValid && (
                  <span className="form-message-error">
                    {fieldMessage.state.meta.errors[0]?.message ?? ''}
                  </span>
                )}
              </>
            )}
          />
        </div>

        <button className="form-submit" type="submit">
          Send message <PaperPlaneTilt weight="duotone" />
          {status === 'pending' && (
            <CircleNotch size={18} weight="regular" className="animate-spin" />
          )}
        </button>
      </form>
    </div>
  );
}

export { ContactFormBlock };
