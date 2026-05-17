import DebugClient from './DebugClient';
import { notFound } from 'next/navigation';

export default function DebugPage() {
    // If running in production, return a 404 to avoid exposing debug information.
    if (process.env.NODE_ENV === 'production') {
        notFound();
    }

    return <DebugClient />;
}