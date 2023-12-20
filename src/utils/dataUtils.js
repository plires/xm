import servicios from './../data/home/servicios.json'
import logos from './../data/home/logos-clientes.json'
import imgsGaleria from './../data/home/galeria.json'
import iconosCaracteristicasA from './../data/nosotros/iconos-nosotros-a.json'
import iconosCaracteristicasB from './../data/nosotros/iconos-nosotros-b.json'
import botones from './../data/servicios/botones.json'
import iconosCaracteristicasSoluciones from './../data/soluciones/iconos-caracteristicas.json'
import iconosTecnologia from './../data/tecnologia/iconos-tecnologia.json'

export const getServicios = key => servicios[key]
export const getLogos = key => logos[key]
export const getimgsGaleria = key => imgsGaleria[key]
export const getIconosIconosCaracteristicasA = key =>
  iconosCaracteristicasA[key]
export const getIconosIconosCaracteristicasB = key =>
  iconosCaracteristicasB[key]
export const getBotones = key => botones[key]
export const getIconosCaracteristicasSoluciones = key =>
  iconosCaracteristicasSoluciones[key]
export const getIconosTecnologia = key => iconosTecnologia[key]
