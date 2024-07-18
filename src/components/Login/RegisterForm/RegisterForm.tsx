import { FC, useEffect, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import UserDataForm from "../UserDataForm/UserDataForm";
import { Button } from "../../Button/Button";
import Link from "next/link";
import Image from "next/image";
import google from '@/../public/google.png';

interface FormValues {
  email: string;
  pin: string[];
}

interface UserData {
  city: string;
  gender: string;
  birthYear: string;
  nickname: string;
}

interface RegisterFormProps {
  setOpenRegisterModal?: () => void; // Define setOpenRegisterModal as optional
}


export const RegisterForm: FC<RegisterFormProps> = ({ setOpenRegisterModal }) => {

  const [userData, setUserData] = useState<UserData>({
    city: '',
    gender: '',
    birthYear: '',
    nickname: ''
  });

  const form = useForm<FormValues>({
    defaultValues: {
      email: '',
      pin: ['', '', '', '', '', ''],
    },
    });
    
  const { register, control, handleSubmit, formState } = form;
  const { errors } = formState;

  useEffect(() => {
    const storedData = {
      city: localStorage.getItem('city') || '',
      gender: localStorage.getItem('gender') || '',
      birthYear: localStorage.getItem('birthYear') || '',
      nickname: localStorage.getItem('nickname') || ''
    };

    setUserData(storedData);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setUserData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const onSubmit = (data: FormValues) => {
      localStorage.setItem("email", data.email);
      localStorage.setItem('pincode', data.pin.join(''));

    if (userData.city && userData.gender && userData.birthYear && userData.nickname) {
      
      localStorage.setItem("city", userData.city);
      localStorage.setItem("gender", userData.gender);
      localStorage.setItem("birthYear", userData.birthYear);
      localStorage.setItem("nickname", userData.nickname);

      if (setOpenRegisterModal) {
        setOpenRegisterModal(); 
      }
    }
  };

  return (
    <div className="self-center min-w-[216px]">
      <form className="flex flex-col items-start" onSubmit={handleSubmit(onSubmit)} noValidate>
        <div className={errors.email ? 'mb-3' : `mb-[30px]`}>
          {localStorage.getItem('email') === null ? (
            <input {...register('email', {
              required: {
                value: true,
                message: 'Email или номер телефона'
              },
              pattern: {
                value: /^[a-zA-Z0-9,!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9]+(?:\.[a-zA-Z0-9-]+)*$/,
                message: 'Неверный формат'
              }
            })}
              id="emailOrPhone"
              className="border mb-1 text-sx font-normal text-sm w-[216px] h-10 text-black rounded-[7px] border-[#E9E9E9] py-3 pl-3 pr-[22px]"
              placeholder="Email или номер телефона"
              type="email"
            />
          ) : userData.city === '' && localStorage.getItem('pincode') === '' ? (
            <div className="flex space-x-3">
              {Array.from({ length: 6 }).map((_, index) => (
                <Controller
                  key={index}
                  name={`pin.${index}`}
                  control={control}
                  defaultValue=""
                  rules={{ required: 'Pin is required' }}
                  render={({ field }) => (
                    <input
                      {...field}
                      type="text"
                      maxLength={1}
                      className="block w-[30px] gap-2 h-[41px] size-[38px] text-center border-[1px] border-borderGray rounded-md text-sm"
                      onChange={(e) => {
                        field.onChange(e);
                        if (e.target.value !== '' && index < 5) {
                          document.getElementById(`pin-${index + 1}`)?.focus();
                        }
                      }}
                      id={`pin-${index}`}
                    />
                  )}
                />
              ))}
            </div>
          ) : <UserDataForm userData={userData} handleChange={handleChange} />
          }
          <p className={`text-red ml-3`}>{errors.email?.message}</p>
        </div>

        <Button
          button={{
            className: 'bg-black rounded-[7px] text-white gap-10 mb-10',
            spanClasses: 'text-[15px] font-medium leading-normal',
            px: 'px-[22px]',
            py: 'py-[12px]',
            text: 'далее',
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

export default RegisterForm;
