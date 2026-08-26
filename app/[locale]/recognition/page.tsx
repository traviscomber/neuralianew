import { RecognitionPage } from '@/components/recognition-page'
import { DEFAULT_LOCALE, isValidLocale } from '@/lib/get-locale'

export default function Page({params}:{params:{locale:string}}){
  const locale=isValidLocale(params.locale)?params.locale:DEFAULT_LOCALE
  return <RecognitionPage locale={locale}/>
}
