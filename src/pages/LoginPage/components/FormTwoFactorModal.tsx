import { esModalTwoFactor } from '@/language';
import { RoutesApplication } from '@/router';
import { Icon } from '@iconify/react/dist/iconify.js';
import {
    Button,
    Input,
    Modal,
    ModalBody,
    ModalContent,
    ModalHeader,
    Tooltip,
} from '@nextui-org/react';
import { useNavigate } from 'react-router-dom';

interface FormForgotModalProps {
    isOpen: boolean;
    onOpenChange: () => void;
}
export const FormTwoFactorModal = (modal: FormForgotModalProps) => {
    const navigate = useNavigate();
    return (
        <Modal
            className=' my-0 mx-0 rounded-none rounded-t-2xl md:rounded-large py-6 md:py-2 md:w-[50%] max-w-lg'
            isOpen={modal.isOpen}
            onOpenChange={modal.onOpenChange}
            placement='auto'
        >
            <ModalContent>
                {(onClose) => (
                    <>
                        <ModalHeader className='flex flex-col gap-5  items-center justify-center'>
                            <Icon
                                className='text-5xl text-primary'
                                icon='solar:smartphone-2-line-duotone'
                            />
                            <section className='flex items-center gap-x-2'>
                                {esModalTwoFactor.title}
                                <Tooltip
                                    placement='top-start'
                                    className='w-1/2'
                                    content={esModalTwoFactor.tooltip}
                                >
                                    <Icon
                                        className='text-xl text-primary'
                                        icon='solar:question-circle-line-duotone'
                                    />
                                </Tooltip>
                            </section>
                        </ModalHeader>
                        <ModalBody className='flex flex-col gap-6'>
                            <Input
                                inputMode='numeric'
                                size='lg'
                                type='number'
                                autoFocus
                                placeholder={
                                    esModalTwoFactor.form.input.placeholder
                                }
                                variant='flat'
                            />
                            <Button
                                color='primary'
                                variant='solid'
                                onPress={() => {
                                    onClose();
                                    navigate(RoutesApplication.Menu);
                                }}
                                size='lg'
                            >
                                {esModalTwoFactor.form.button}
                            </Button>
                            <p>{esModalTwoFactor.description}</p>
                        </ModalBody>
                    </>
                )}
            </ModalContent>
        </Modal>
    );
};
