import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/forms/form/Form'
import FormWrap from '@/components/forms/form/FormWrap'
import Input from '@/components/forms/inputs/text/Input'
import { RichText } from '@/components/forms/inputs/text/RichText'
import { DateRangePicker } from '@/components/ui/calendar/DateRangePicker'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { date, z } from 'zod'
import StepDescription from '../StepDescription'
import { motion } from 'framer-motion'
import { useWizardContext } from '../../_context/WizardContext'


const formSchema = z.object({
  name: z
    .string()
    .max(32, { message: 'Name must be less than 32 characters' })
    .min(1, { message: 'Name is required' }),
  description: z.string().optional(),
  date: z.object({
    from: date({ required_error: 'Start date is required' }),
    to: date({ required_error: 'End date is required' })
  })
})

function ProjectDetails() {
  const { setFormDetails, setCurrentStep } = useWizardContext()
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      description: '',
      date: {
        from: new Date(),
        to: new Date()
      }
    }
  })


  const onSubmit = async (data: any) => {
    setFormDetails(data)
    setCurrentStep(1)
  }

  return (
    <motion.div
      className="w-full space-y-8"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{
        duration: 0.1,
        delay: 0.3,
        type: 'spring',
        damping: 10,
        stiffness: 100
      }}
      variants={{
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 30 }
      }}>
      <StepDescription
        title="New Project"
        description="Please start by providing details of your project."
      />
      <Form {...form}>
        <FormWrap
          submitText="Next"
          buttonClassName="w-full text-base"
          onSubmit={form.handleSubmit(onSubmit)}>
          <div className="flex w-full flex-col gap-8">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel required>Project name</FormLabel>
                  <FormControl>
                    <Input
                      type="text"
                      placeholder="Name of your project"
                      className=""
                      maxLength={32}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Description</FormLabel>
                  <FormControl>
                    <RichText
                      placeholder="Name of your project"
                      {...field}
                      // error={errors?.email}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="date"
              render={({ field }) => (
                <FormItem className="mb-4">
                  <FormLabel required>Date range</FormLabel>
                  <FormControl>
                    <DateRangePicker
                      onUpdate={(values) => field.onChange(values.range)}
                      align="center"
                      locale="en-GB"
                      showCompare={false}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </FormWrap>
      </Form>
    </motion.div>
  )
}

export default ProjectDetails
