import Image from 'next/image'
import Link from 'next/link'
import type { Locale } from '@/lib/get-locale'

type Project={id:string;name:string;industry:string;image:string;problem:string;system:string;value:string;tags:string[]}
type Product=[string,string,string,string,string[]]

const projects:Record<Locale,Project[]>={
  es:[
    {id:'motil',name:'Motil',industry:'Operaciones de transporte',image:'/n3uralia-retro/project