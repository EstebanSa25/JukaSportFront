import { esModalForgot } from '@/language';
import { Icon } from '@iconify/react';
import {
    Button,
    Input,
    Modal,
    ModalBody,
    ModalContent,
    ModalHeader,
} from '@nextui-org/react';

interface FormForgotModalProps {
    isOpen: boolean;
    onOpenChange: () => void;
}
export const FormForgotModal = (modal: FormForgotModalProps) => {
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
                        <ModalHeader className='flex flex-col gap-1'>
                            {esModalForgot.title}
                        </ModalHeader>
                        <ModalBody>
                            <Input
                                inputMode='email'
                                size='lg'
                                autoFocus
                                endContent={
                                    <Icon
                                        width='2em'
                                        icon='ic:baseline-email'
                                    />
                                }
                                label={esModalForgot.form.label}
                                placeholder={
                                    esModalForgot.form.email.placeholder
                                }
                                variant='underlined'
                            />
                            <Button
                                color='secondary'
                                variant='ghost'
                                onPress={onClose}
                            >
                                {esModalForgot.form.button}
                            </Button>
                        </ModalBody>
                    </>
                )}
            </ModalContent>
        </Modal>
    );
};
