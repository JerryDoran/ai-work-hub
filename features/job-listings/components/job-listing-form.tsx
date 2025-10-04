'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { jobListingSchema } from '../actions/schemas';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { z } from 'zod';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectItem,
  SelectValue,
  SelectContent,
  SelectTrigger,
} from '@/components/ui/select';
import { wageIntervals } from '@/drizzle/schema';
import { formatWageInterval } from '../lib/formatters';

export default function JobListingForm() {
  const form = useForm({
    resolver: zodResolver(jobListingSchema),
    defaultValues: {
      title: '',
      description: '',
      experienceLevel: 'junior',
      locationRequirement: 'in-office',
      type: 'full-time',
      wage: null,
      wageInterval: 'yearly',
      state: null,
      city: null,
    },
  });

  async function onSubmit(data: z.infer<typeof jobListingSchema>) {
    console.log(data);
  }
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className='space-y-6 @container'
      >
        <div className='grid grid-cols-1 @md:grid-cols-2 gap-x-4 gap-y-6 items-start'>
          <FormField
            name='title'
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Job Title</FormLabel>
                <FormControl>
                  <Input
                    placeholder='e.g. Senior Software Engineer'
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            name='wage'
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Wage</FormLabel>
                <div className='flex'>
                  <FormControl>
                    <Input
                      {...field}
                      type='number'
                      value={field.value ?? ''}
                      className='rounded-r-none'
                      onChange={(e) =>
                        field.onChange(
                          isNaN(e.target.valueAsNumber)
                            ? null
                            : e.target.valueAsNumber
                        )
                      }
                    />
                  </FormControl>
                  <FormField
                    name='wageInterval'
                    control={form.control}
                    render={({ field }) => (
                      <FormItem>
                        <Select
                          value={field.value ?? ''}
                          onValueChange={(val) => field.onChange(val ?? null)}
                        >
                          <FormControl>
                            <SelectTrigger className='rounded-l-none'>
                              / <SelectValue />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {wageIntervals.map((interval) => (
                              <SelectItem key={interval} value={interval}>
                                {formatWageInterval(interval)}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </FormItem>
                    )}
                  />
                </div>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
      </form>
    </Form>
  );
}
