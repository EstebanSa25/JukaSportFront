import { Button, Input, Link, useDisclosure } from '@nextui-org/react';

import { useAuth } from '@/hooks';
import { esFormLogin } from '@/language';
import { IFormLogin } from '@/models';
import { useForm } from 'react-hook-form';
import { FormForgotModal } from './FormForgotModal';

export const FormLogin = () => {
    const { register, handleSubmit } = useForm<IFormLogin>();
    const { startLogin, loading } = useAuth();
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    return (
        <>
            <form
                className='flex flex-col gap-4 mt-10  w-[90%] lg:w-[40%] xl:w-[25%]  justify-center'
                onSubmit={handleSubmit(startLogin)}
            >
                <Input
                    type='email'
                    size='lg'
                    label={esFormLogin.form.email.label}
                    placeholder={esFormLogin.form.email.placeholder}
                    {...register('email')}
                />
                <Input
                    type='password'
                    size='lg'
                    label={esFormLogin.form.password.label}
                    placeholder={esFormLogin.form.password.placeholder}
                    {...register('password')}
                />
                <Button
                    isLoading={loading}
                    size='lg'
                    type='submit'
                    color='primary'
                    variant='solid'
                >
                    {esFormLogin.form.button.children}
                </Button>
                <Link
                    onClick={onOpen}
                    className='cursor-pointer mx-auto'
                    showAnchorIcon
                >
                    {esFormLogin.form.forgotButton.children}
                </Link>
            </form>
            {isOpen && (
                <FormForgotModal onOpenChange={onOpenChange} isOpen={isOpen} />
            )}
        </>
    );
};
