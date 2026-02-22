'use client';

import { Providers } from '@/components/Providers';
import { ReactNode } from 'react';

export default function AdminLayout({ children }: { children: ReactNode }) {
  return <Providers>{children}</Providers>;
}
