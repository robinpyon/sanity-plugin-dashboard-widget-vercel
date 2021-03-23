// https://vercel.com/docs/platform/limits
export const API_ENDPOINT_DEPLOYMENTS =
  'https://api.vercel.com/v5/now/deployments'
export const API_ENDPOINT_ALIASES = 'https://api.vercel.com/v3/now/aliases'

export const DEBUG_MODE = false

export const DEPLOYMENT_TARGET_DOCUMENT_TYPE = 'vercel.deploymentTarget'

export const VERCEL_STATUS_COLORS = {
  BUILDING: '#f5a623',
  CANCELED: '#ff0000',
  ERROR: '#ff0000',
  READY: '#50e3c2',
  QUEUED: '#333',
}

// Name displayed in toasts
export const WIDGET_NAME = 'Vercel dashboard widget'

// NOTE: Manually set plugin z-index values to be higher than Sanity's header search field
// (which is currently 500202). Also ensure toasts always sit above dialogs.
export const Z_INDEX_DIALOG = 600001
export const Z_INDEX_TOAST_PROVIDER = 600002
