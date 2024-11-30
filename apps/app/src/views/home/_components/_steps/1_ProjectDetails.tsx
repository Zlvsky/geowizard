import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel
} from '@/components/forms/form/Form'
import FormWrap from '@/components/forms/form/FormWrap'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { date, z } from 'zod'
import StepDescription from '../StepDescription'
import Input from '@/components/forms/inputs/text/Input'
import { DateRangePicker } from '@/components/ui/calendar/DateRangePicker'

const formSchema = z.object({
  name: z.string(),
  description: z.string().optional(),
  date: z.object({
    from: date(),
    to: date()
  })
})

function ProjectDetails() {
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

  const onSubmit = async (data: any) => {}

  return (
    <div className="w-full space-y-8">
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
                      required
                    />
                  </FormControl>
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
                    <Input
                      type="text"
                      placeholder="Name of your project"
                      className=""
                      {...field}
                      // error={errors?.email}
                      required
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="date"
              render={({ field }) => (
                <FormItem>
                  <FormLabel required>Date range</FormLabel>
                  <FormControl>
                    <DateRangePicker
                      onUpdate={(values) => field.onChange(values)}
                      align="center"
                      locale="en-GB"
                      showCompare={false}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
          </div>
        </FormWrap>
      </Form>
    </div>
  )
}

export default ProjectDetails
