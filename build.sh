#!/bin/bash

# Instalar dependencias
pnpm install

# Limpiar build anterior (opcional)
rm -rf dist

# Generar build de producción
pnpm build