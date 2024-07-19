import { Button } from "@/components/Button/Button";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import { useForm } from "react-hook-form";
import google from '@/public/google.png';

interface FormValues {
  email: string;
  password: string;
}

interface RegisterFormProps {
  setOpenRegisterModal?: () => void; // Define setOpenRegisterModal as optional
}

export const LoginForm: FC<RegisterFormProps> = ({ setOpenRegisterModal }) => {
  const form = useForm<FormValues>({
    defaultValues: {
      email: '',
      password: "",
    },
  });

  const { register, handleSubmit, formState } = form;
  const { errors } = formState;

  const onSubmit = (data: FormValues) => {
    // Handle the form submission
    const storedEmail = localStorage.getItem("email");
    const storedPassword = localStorage.getItem('password');
    console.log(data);

    // Close the modal if the setOpenRegisterModal function is provided
    if (setOpenRegisterModal) {
      setOpenRegisterModal();
    }
  };

  return (
    <div className='text-black flex flex-col items-center justify-center self-center'>
      <form className="flex flex-col items-center justify-center" onSubmit={handleSubmit(onSubmit)} noValidate>
        <div className={'mb-3'}>
          <input {...register('email', {
            required: {
              value: true,
              message: '@никнейм'
            },
            pattern: {
              value: /^[a-zA-Z0-9,!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9]+(?:\.[a-zA-Z0-9-]+)*$/,
              message: 'Неверный формат'
            }
          })}
            id="emailOrPhone"
            className="border mb-1 text-sx font-normal text-sm w-[216px] h-10 text-black rounded-[7px] border-[#E9E9E9] py-3 pl-3 pr-[22px]"
            placeholder="@никнейм"
            type="email"
          />
          <p className={`text-red ml-3`}>{errors.email?.message}</p>
        </div>

        <div className={'mb-3'}>
          <input {...register('email', {
            required: {
              value: true,
              message: 'Пароль'
            },
            pattern: {
              value: /^[a-zA-Z0-9,!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9]+(?:\.[a-zA-Z0-9-]+)*$/,
              message: 'Неверный формат'
            }
          })}
            id="emailOrPhone"
            className="border mb-1 text-sx font-normal text-sm w-[216px] h-10 text-black rounded-[7px] border-[#E9E9E9] py-3 pl-3 pr-[22px]"
            placeholder="Пароль"
            type="email"
          />
          <p className={`text-red ml-3`}>{errors.email?.message}</p>
        </div>

        <Button
          button={{
            className: 'bg-black rounded-[7px] text-white gap-10 mb-10 w-full',
            spanClasses: 'text-[15px] font-medium leading-normal',
            px: 'px-[22px]',
            py: 'py-[12px]',
            text: 'войти в аккаунт',
            type: 'submit'
          }}
        />
      </form>
      <Link href={'/'}>
        <Image src={google} alt="Google Icon" width={70.947} height={24} />
      </Link>
    </div>
  );
};
