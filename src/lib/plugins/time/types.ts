import type { BaseFieldSpec } from '$lib/core';
export interface TimeFieldSpec extends BaseFieldSpec { type: 'time'; h?: string; m?: string; s?: string; ampm?: string; }