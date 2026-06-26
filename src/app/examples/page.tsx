"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { toast } from "sonner"
import { z } from "zod"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { Skeleton } from "@/components/ui/skeleton"
import { Container } from "@/components/layout/container"

const formSchema = z.object({
  email: z.string().email({ message: "올바른 이메일 주소를 입력해주세요." }),
  name: z.string().min(2, { message: "이름은 2자 이상이어야 합니다." }),
})

function ContactForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: { email: "", name: "" },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    toast.success(`${values.name}님, 제출되었습니다!`)
    form.reset()
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>이름</FormLabel>
              <FormControl>
                <Input placeholder="홍길동" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>이메일</FormLabel>
              <FormControl>
                <Input placeholder="hello@example.com" type="email" {...field} />
              </FormControl>
              <FormDescription>수신용 이메일 주소를 입력해주세요.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="w-full">제출하기</Button>
      </form>
    </Form>
  )
}

export default function ExamplesPage() {
  return (
    <div className="py-16">
      <Container className="space-y-16">
        {/* 페이지 제목 */}
        <section className="space-y-2">
          <Badge variant="secondary">컴포넌트 쇼케이스</Badge>
          <h1 className="text-3xl font-bold tracking-tight">예제</h1>
          <p className="text-muted-foreground">
            스타터킷에 포함된 shadcn/ui 컴포넌트 예제입니다.
          </p>
        </section>

        <Separator />

        {/* Cards */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold">컴포넌트 미리보기</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Avatar>
                    <AvatarImage src="https://github.com/shadcn.png" alt="shadcn" />
                    <AvatarFallback>SC</AvatarFallback>
                  </Avatar>
                  <div>
                    <CardTitle className="text-base">shadcn</CardTitle>
                    <CardDescription>UI 컴포넌트</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  radix-nova 스타일의 shadcn/ui 컴포넌트가 기본으로 설치되어 있습니다.
                </p>
              </CardContent>
              <CardFooter className="gap-2">
                <Badge>UI</Badge>
                <Badge variant="secondary">Radix</Badge>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-base">다크모드</CardTitle>
                <CardDescription>next-themes 연동</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  우측 상단 토글로 라이트/다크/시스템 테마를 전환할 수 있습니다.
                </p>
              </CardContent>
              <CardFooter>
                <Badge variant="secondary">next-themes</Badge>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-base">폼 유효성 검증</CardTitle>
                <CardDescription>react-hook-form + zod</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  스키마 기반 폼 유효성 검증이 준비되어 있습니다. 아래 예시를 확인하세요.
                </p>
              </CardContent>
              <CardFooter className="gap-2">
                <Badge variant="secondary">zod</Badge>
                <Badge variant="secondary">RHF</Badge>
              </CardFooter>
            </Card>
          </div>
        </section>

        <Separator />

        {/* Form + Dialog */}
        <section className="grid gap-8 md:grid-cols-2">
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">폼 예시</h2>
            <Card>
              <CardContent className="pt-6">
                <ContactForm />
              </CardContent>
            </Card>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">기타 컴포넌트</h2>
            <div className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle className="text-base">Dialog</CardTitle>
                </CardHeader>
                <CardContent>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant="outline">다이얼로그 열기</Button>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>안녕하세요!</DialogTitle>
                        <DialogDescription>
                          shadcn/ui Dialog 컴포넌트가 정상 동작합니다.
                        </DialogDescription>
                      </DialogHeader>
                    </DialogContent>
                  </Dialog>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-base">Toast (Sonner)</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-wrap gap-2">
                  <Button variant="outline" size="sm" onClick={() => toast("기본 알림입니다.")}>기본</Button>
                  <Button variant="outline" size="sm" onClick={() => toast.success("성공!")}>성공</Button>
                  <Button variant="outline" size="sm" onClick={() => toast.error("오류 발생!")}>오류</Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-base">Skeleton</CardTitle>
                </CardHeader>
                <CardContent className="flex items-center gap-4">
                  <Skeleton className="size-10 rounded-full" />
                  <div className="space-y-2">
                    <Skeleton className="h-4 w-32" />
                    <Skeleton className="h-4 w-24" />
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </Container>
    </div>
  )
}
