'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { AlertTriangle } from 'lucide-react'

export default function NotFoundPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background p-4">
      <Card className="w-full max-w-md text-center">
        <CardHeader className="flex flex-col items-center space-y-4">
          <AlertTriangle className="h-16 w-16 text-destructive" />
          <CardTitle className="text-3xl">404 - Page Not Found</CardTitle>
          <CardDescription>
            Oops! The page you are looking for seems to have wandered off.
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col items-center space-y-4">
          <p className="text-muted-foreground">
            It looks like the page you're trying to visit doesn't exist.
          </p>
          <div className="flex space-x-4">
            <Button asChild variant="outline">
              <Link href="/">Go to Home</Link>
            </Button>
            {/* <Button asChild>
              <Link href="/contact">Contact Support</Link>
            </Button> */}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}