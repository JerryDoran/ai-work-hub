'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { jobListingSchema } from '../actions/schemas';

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
  return <div>JobListingForm</div>;
}
