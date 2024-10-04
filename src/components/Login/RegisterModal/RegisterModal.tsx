'use client';
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from '@hookform/resolvers/zod';
import axios from "axios";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Form, FormControl, FormField, FormItem, FormMessage, FormDescription,FormLabel } from "@/components/ui/form";
import { InputOTP, InputOTPGroup, InputOTPSlot } from "@/components/ui/input-otp"
import { AlertCircle } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Modal from "@/components/ui/modal";
import { useRegisterModal } from "@/hooks/useRegisterModal";
import { StepOne, StepOneVal, StepThree, StepThreeVal, StepTwo, StepTwoVal } from "@/interfaces/registerModal.interface";
import { z } from "zod";
import { contactSchema, isValidEmail, isValidPhoneNumber, regStepThreeSchema, regStepTwoSchema } from "@/utils/schema/validation.schema";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import Image from "next/image";
import { toast } from "@/hooks/use-toast";


// RegisterModal component
export const RegisterModal = () => {
  const API = 'http://95.47.127.169:5100';
  const registerModal = useRegisterModal();
  const [step, setStep] = useState(1);
  const [step1Data, setStep1Data] = useState<StepOneVal>({ contact: { email: '', phoneNumber: '' } });
  const [title, setTitle] = useState("🧔👩 Спасибо что выбрал здоровый образ жизни!")
  const [step2Data, setStep2Data] = useState<StepTwoVal>({ code: 0, data: '', token: '' });
  const [step3Data, setStep3Data] = useState<StepThreeVal>({name: { firstName: "", lastName: "" }, gender: "", birthdate: "", regionId: "", username: "", password: ''});
  const [error, setError] = useState('');
  const [code, setCode] = useState(0)

  // STEP 1 component
  const StepOne: React.FC<StepOne> = ({ setStep1Data, setStep }) => {
    const form = useForm<z.infer<typeof contactSchema>>({
      resolver: zodResolver(contactSchema),
      defaultValues: {
        contact: ''
      },
    });

    const onSubmit = async (values: z.infer<typeof contactSchema>) => {
      try {
        const contactInput = String(values.contact);
        let requestData;
        
        if (isValidEmail(contactInput)) {
          requestData = { email: contactInput };
        } else if (isValidPhoneNumber(contactInput)) {
          requestData = { phoneNumber: contactInput };
        } else {
          throw new Error("Invalid input: Must be a valid email or phone number");
        }

        const { data } = await axios.post(`${API}/users/sign-up`, requestData);
        
        if (data.success) {
          console.log(data);
          
          setStep1Data({ contact: requestData });
          setCode(data.data.code);
          setTitle("📮Мы отрпавили смс с кодом для активация аккаунта")
          setStep(2); // Move to the next step
        } else {
          throw new Error(data.message || 'Failed to sign up');
        }
      } catch (error: unknown) {
        if (axios.isAxiosError(error) && error.response?.data.error) {
          setError(error.response.data.error);
        } else {
          setError('Something went wrong, please try again!');
        }
      }
    };

    const { isSubmitting } = form.formState;

    return (
      <div className="min-w-[216px]">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col items-start">
            {error && (
              <Alert variant={'destructive'}>
                <AlertCircle className="w-4 h-4" />
                <AlertTitle>Error</AlertTitle>
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}
            <FormField control={form.control} name="contact" render={({ field }) => (
              <FormItem>
                <FormControl>
                  <div className="grid w-full items-center gap-1.5">
                    <Input
                      type="text"
                      id="contact"
                      placeholder="Email или номер телефона"
                      className="border text-sx font-normal text-sm w-[216px] h-10 text-black rounded-[7px] border-[#E9E9E9] py-3 pl-3 pr-[22px] mb-[30px]"
                      {...field}
                    />
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )} />
            <Button type="submit" disabled={isSubmitting} className="!mt-0 px-[22px] py-3 text-[15px] font-medium leading-[17.9px]">далее</Button>
          </form>
        </Form>

        <Image src={'/google.png'} alt="google" width={71} height={24} className="cursor-pointer mt-10"/>
      </div>
    );
  };

  const StepTwo: React.FC<StepTwo> = ({ setStep2Data, setStep }) => {

    const form = useForm<z.infer<typeof regStepTwoSchema>>({
      resolver: zodResolver(regStepTwoSchema),
      defaultValues: {
        code: "",
      },
    })
  
    const {isSubmitting} = form.formState;

    const onSubmit = async (value: z.infer<typeof regStepTwoSchema>) => {
      
      const requestData = {
        ...step1Data.contact,
        code: Number(value.code),
      };

      try {
        const { data } = await axios.post(`${API}/users/sign-up`, requestData);
        if (data.success) {
          console.log(data.data.token);
          setStep2Data({code: Number(value.code), token: data.data.token, data: requestData.email || requestData.phoneNumber});
          setTitle("Придумайте для себя никнейм )")
          setStep(3);
          console.log(step2Data);
        }
      } catch (error: unknown) {
        if (axios.isAxiosError(error) && error.response?.data.error) { 
          setError(error.response.data.error);
          toast({
            title: error.response.data.error,
            variant: 'destructive'
          })
        } else {
          console.error('Something went wrong, please try again!');
        }
      }
    }    

    return (
      <div className="min-w-[216px]">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col items-start">
            {error && (
              <Alert variant={'destructive'}>
                <AlertCircle className="w-4 h-4" />
                <AlertTitle>Error</AlertTitle>
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}
            <FormField
              control={form.control}
              name="code"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Введите смс код</FormLabel>
                  <FormControl>
                    <InputOTP maxLength={6} {...field}>
                      <InputOTPGroup className="mb-[30px]">
                        <InputOTPSlot index={0} />
                        <InputOTPSlot index={1} />
                        <InputOTPSlot index={2} />
                        <InputOTPSlot index={3} />
                        <InputOTPSlot index={4} />
                        {/* <InputOTPSlot index={5} /> */}
                      </InputOTPGroup>
                    </InputOTP>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}/>

              <Button type="submit" disabled={isSubmitting} className="!mt-0 px-[22px] py-3 text-[15px] font-medium leading-[17.9px]">далее</Button>
          </form>
        </Form>
        <Image src={'/google.png'} alt="google" width={71} height={24} className="cursor-pointer"/>
      </div>
    )
  }

  const StepThree: React.FC = () => {
    const [preview, setPreview] = useState<string | null>(null)
    const form = useForm<z.infer<typeof regStepThreeSchema>>({
      defaultValues: {
        name: {
          firstName: '',
          lastName: ''
        },
        avatar: null,
        region: "",
        gender: "",
        birthdate: "",
        username: "",
      },
    })

    //IMG UPLOAD
    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setPreview(reader.result as string)
      }
      reader.readAsDataURL(file)
    } else {
      setPreview(null)
    }
    }

    const {isSubmitting} = form.formState;

    const onSubmit = async (data: z.infer<typeof regStepThreeSchema>) => {
      console.log("Form submitted", data)
    }

  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="w-full max-w-2xl mx-auto px-9 pb-8 space-y-6">
          <div className="flex gap-0.5 mb-[52px]">
            <div className="relative w-[124px] h-[124px] flex-shrink-0 group">
              <Input
                id="avatar"
                type="file"
                accept="image/*"
                className="absolute inset-0 w-full h-full opacity-0 z-10 rounded-[12x]"
                onChange={(e) => {
                  form.setValue("avatar", e.target.files)
                  handleFileChange(e)
                }}
                aria-label="Profil rasmini yuklash"
              />
              <label htmlFor="avatar" className="overflow-hidden flex p-8 w-full h-full rounded-lg cursor-pointer bg-gray hover:bg-gray-100 dark:hover:border-gray-500">
                {preview ? (
                  <Image src={preview} alt="Profil rasmi" className="w-full h-full object-cover" width={60} height={60} />
                ) : (
                  <Image src='/upload.png' alt='upload image' width={60} height={60} />
                )}
              </label>
            </div>

            <div className="flex flex-col">
                <div className="flex mb-0.5 gap-x-0.5">
                  {/* FIRST NAME */}
                  <FormField
                      control={form.control}
                      name="name.firstName"
                      render={({ field }) => (
                        <FormItem className="w-full">
                          <FormControl className="h-10">
                            <Input {...field} placeholder="имя" className="rounded-[10px]"/>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                  {/* LAST NAME */}
                  <FormField
                    control={form.control}
                    name="name.lastName"
                    render={({ field }) => (
                      <FormItem className="w-full">
                        <FormControl className="h-10">
                          <Input {...field} placeholder="фамилия" className="rounded-[10px]"/>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="flex mb-0.5 gap-x-0.5">
                  {/* USERNAME */}
                  <FormField
                    control={form.control}
                    name="username"
                    render={({ field }) => (
                      <FormItem className="w-[180px">
                        <FormControl className="h-10">
                          <Input {...field} placeholder="никнейм: (это может быть ваше имя)" className="rounded-[10px]"/>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* GENDER */}
                  <FormField
                    control={form.control}
                    name="gender"
                    render={({ field }) => (
                      <FormItem className="w-[120px]">
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl className="border border-borderGray py-1.5 px-3.5 rounded-[10px] mr-0.5 h-10">
                            <SelectTrigger>
                              <SelectValue className="text-[13px]" placeholder="гендер"/>
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="male">Erkak</SelectItem>
                            <SelectItem value="female">Ayol</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                
                <div className="flex mb-0.5 gap-x-0.5">
                  {/* REGION */}
                  <FormField
                    control={form.control}
                    name="region"
                    render={({ field }) => (
                      <FormItem className="space-y-0 w-[180px]">
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl className="border border-borderGray py-1.5 px-3.5 rounded-[10px] mr-0.5 h-10">
                            <SelectTrigger>
                              <SelectValue className="text-[13px]" placeholder="выбери город" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="toshkent">Toshkent</SelectItem>
                            <SelectItem value="samarqand">Samarqand</SelectItem>
                            <SelectItem value="buxoro">Buxoro</SelectItem>
                            <SelectItem value="andijon">Andijon</SelectItem>
                            <SelectItem value="fargona">Fargona</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  {/* BIRTH DATE */}
                  <FormField
                    control={form.control}
                    name="birthdate"
                    render={({ field }) => (
                      <FormItem className="w-[120px]">
                        <FormControl className="border border-borderGray py-1.5 px-3.5 rounded-[10px] mr-0.5 h-10">
                          <Input type="date" {...field} placeholder="год ржд" max={new Date().getFullYear()} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

            </div>
          </div>

          <Button type="submit" disabled={isSubmitting} className="!mt-0 ml-[19px] px-[22px] py-3 text-[15px] font-medium rounded-[10px] leading-[17.9px]">далее</Button>
        </form>
      </Form>
      <Image src={'/google.png'} alt="google" width={71} height={24} className="cursor-pointer ml-[55px]"/>
    </div>
    )
  }

  // Body of the modal showing Step 1
  const body = step === 1 
    ? <StepOne setStep1Data={setStep1Data} setStep={setStep} />
    : step === 2 
    ? <StepTwo setStep2Data={setStep2Data} setStep={setStep}/>
    : <StepThree />

  return (
    <Modal
      title={title}
      body={body}
      step={step}
      isOpen={registerModal.isOpen}
      onClose={registerModal.onClose}
    />
  );
};