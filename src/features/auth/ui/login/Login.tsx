import {useForm} from 'react-hook-form';


export const Login = () => {
    const {register, handleSubmit, watch, formsState: {errors}} = useForm()
    const onSubmit = data => console.log(data)


    console.log(watch('example'))


    return (
        <form onSubmit={handleSubmit(onSubmit)}>
        <input defaultValue='test' {...register('example')}/>
        <input {...register('exampleRequired, {required:true}')}/>
        {errors.exampleRequired && <span>This field is required</span>}
        <input type='submit'/>
        </form>
    )
}