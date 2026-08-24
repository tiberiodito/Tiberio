/**
 * Helper para eventos do Meta / Facebook Pixel
 * Pixel ID: 2593714061090334
 */

export const META_PIXEL_ID = '2593714061090334';

declare global {
  interface Window {
    fbq?: (...args: any[]) => void;
    _fbq?: any;
  }
}

/**
 * Dispara evento padrão ou personalizado no Facebook Pixel de forma segura
 */
export const trackPixelEvent = (
  eventName: string,
  params?: Record<string, any>
) => {
  if (typeof window !== 'undefined' && typeof window.fbq === 'function') {
    try {
      if (params) {
        window.fbq('track', eventName, params);
      } else {
        window.fbq('track', eventName);
      }
    } catch (e) {
      console.warn('Meta Pixel tracking error:', e);
    }
  }
};

/**
 * Dispara o evento de InitiateCheckout quando o usuário clica para comprar
 */
export const trackInitiateCheckout = (value = 6.9, currency = 'USD') => {
  trackPixelEvent('InitiateCheckout', {
    content_name: 'Pack Fiesta Lista - 1.500+ Moldes y Plantillas',
    content_category: 'Digital Kit',
    value: value,
    currency: currency,
    num_items: 1,
  });
};

/**
 * Dispara evento de ViewContent (quando visualiza a demonstração do entregável ou bônus)
 */
export const trackViewContent = (contentName: string) => {
  trackPixelEvent('ViewContent', {
    content_name: contentName,
    content_type: 'product',
  });
};
