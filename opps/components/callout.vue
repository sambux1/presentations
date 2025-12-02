<script setup lang="ts">
import { computed } from 'vue'

type Align = 'left' | 'center' | 'right'

const props = withDefaults(defineProps<{
  x?: number // 0-100 viewport width percent
  y?: number // 0-100 viewport height percent
  color?: string // background color
  textColor?: string // text color
  padding?: string // CSS padding (e.g., '8px 12px')
  radius?: string // CSS border-radius
  align?: Align // horizontal anchor for the box relative to x
  shadow?: boolean // drop shadow toggle
  border?: string // optional border, e.g., '1px solid #0003'
}>(), {
  x: 50,
  y: 50,
  color: '#62c1e5',
  textColor: '#000000',
  padding: '10px 14px',
  radius: '12px',
  align: 'center',
  border: ''
})

const containerStyle = computed(() => {
  const translateX = props.align === 'center' ? '-50%' : props.align === 'right' ? '-100%' : '0'
  return {
    position: 'absolute',
    left: `${props.x}%`,
    top: `${props.y}%`,
    transform: `translate(${translateX}, -50%)`,
    background: props.color,
    color: props.textColor,
    lineHeight: '1.2',
    padding: props.padding,
    borderRadius: props.radius,
    border: props.border,
    boxShadow: props.shadow ? '0 6px 18px rgba(0,0,0,0.12), 0 2px 6px rgba(0,0,0,0.06)' : 'none',
    maxWidth: 'min(80vw, 1200px)',
    whiteSpace: 'pre-wrap'
  } as Record<string, string>
})
</script>

<template>
  <div :style="containerStyle" class="callout-root">
    <slot />
  </div>
  <!-- Note: This component uses absolute positioning; ensure parent is relatively positioned -->
  <!-- In Slidev, use it within a container that spans the slide, e.g., the slide root is fine -->
</template>

<style scoped>
/* Normalize inline math and paragraph spacing so height stays consistent */
.callout-root {
  display: inline-block;
}

/* Remove default margins that markdown paragraphs might add inside slot */
:deep(p) {
  margin: 0;
}

/* Let KaTeX use baseline alignment to match adjacent text */

/* Ensure display math (if used) doesn't add extra top/bottom margins */
:deep(.katex-display) {
  margin: 0;
}
</style>


