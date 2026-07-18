import type { MetadataRoute } from 'next'
import { absoluteUrl } from '@/lib/site'

const locales = ['es','en'] as const
const updated = new Date('2026-07-18T00:00:00.000Z')
const routes = [
  ['',1,'weekly'],['/soluciones',.95,'weekly'],['/proyectos',.9,'weekly'],['/productos',.9,'weekly'],['/contact',.9,'monthly'],['/services',.85,'monthly'],['/platform',.85,'monthly'],['/capabilities',.8,'monthly