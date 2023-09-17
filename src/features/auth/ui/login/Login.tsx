import {useForm} from 'react-hook-form';


export const Login = () => {
    const {register, handleSubmit, watch} = useForm()
    const onSubmit = () => console.log()


    console.log(watch('example'))


    return (
        <form onSubmit={handleSubmit(onSubmit)}>
        <input defaultValue='test' {...register('example')}/>
        <input {...register('exampleRequired, {required:true}')}/>
        <input type='submit'/>
        </form>
    )
}