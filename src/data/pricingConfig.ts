// Configuração Centralizada de Preços e Conversões da Landing Page
// Ao alterar o preço base 'BASE_USD_PRICE' ou qualquer valor aqui,
// TODOS os locais da página de vendas atualizam automaticamente!

export interface CurrencyConfig {
  symbol: string;
  regular: string;
  promo: string;
  text: string;
  payMethods: {
    es: string;
    pt: string;
  };
  flag: string;
  badge?: string;
}

// Preço base oficial em Dólar (USD)
export const PRICING_CONFIG = {
  baseUsdRegular: 37.00,
  baseUsdPromo: 6.90,
  discountPercentage: 81,
  bonusValueUsd: 184.00,
};

// URL Oficial do Checkout na Cooud
export const OFFICIAL_CHECKOUT_URL = 'https://checkout.cooud.com/01M0V8EEMTFNMCG0PFART5182K';

/**
 * Retorna o link oficial da Cooud preservando e repassando automaticamente
 * todos os parâmetros de rastreamento (UTMs, src, sck, etc.)
 */
export const getCooudCheckoutUrl = (customUrl?: string): string => {
  const targetUrl = customUrl || OFFICIAL_CHECKOUT_URL;
  if (typeof window === 'undefined') return targetUrl;
  try {
    const currentParams = new URLSearchParams(window.location.search);
    const checkoutUrl = new URL(targetUrl);
    
    // Repassa UTMs de campanhas (Facebook Ads, Google, TikTok, Instagram, etc.)
    const trackingKeys = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content', 'src', 'sck'];
    trackingKeys.forEach((key) => {
      const val = currentParams.get(key);
      if (val && !checkoutUrl.searchParams.has(key)) {
        checkoutUrl.searchParams.set(key, val);
      }
    });

    return checkoutUrl.toString();
  } catch {
    return targetUrl;
  }
};

// Tabela de moedas locais com conversões otimizadas e métodos de pagamento nativos
// Pode ser alimentada ou ajustada dinamicamente conforme cotação desejada
export const CURRENCY_RATES: Record<string, CurrencyConfig> = {
  USD: { 
    symbol: '$', 
    regular: '37.00', 
    promo: '6.90', 
    text: 'Dólares (USD)', 
    flag: '🇺🇸',
    payMethods: {
      es: 'Tarjeta de Crédito, Débito, PayPal',
      pt: 'Cartão de Crédito Internacional, PayPal'
    }
  },
  MXN: { 
    symbol: '$', 
    regular: '690', 
    promo: '135', 
    text: 'Pesos Mexicanos (MXN)', 
    flag: '🇲🇽',
    badge: 'OXXO / SPEI',
    payMethods: {
      es: 'OXXO en efectivo, Tarjetas bancarias, Mercado Pago, SPEI',
      pt: 'OXXO, Cartões, Mercado Pago, SPEI'
    }
  },
  COP: { 
    symbol: '$', 
    regular: '150.000', 
    promo: '29.900', 
    text: 'Pesos Colombianos (COP)', 
    flag: '🇨🇴',
    badge: 'PSE / Nequi / Efecty',
    payMethods: {
      es: 'PSE, Bancolombia, Nequi, Daviplata, Efecty en efectivo',
      pt: 'PSE, Bancolombia, Nequi, Efecty em dinheiro'
    }
  },
  PEN: { 
    symbol: 'S/', 
    regular: '140', 
    promo: '26.90', 
    text: 'Soles Peruanos (PEN)', 
    flag: '🇵🇪',
    badge: 'Yape / Plin / PagoEfectivo',
    payMethods: {
      es: 'Yape, Plin, PagoEfectivo (agentes y bodegas), Tarjetas',
      pt: 'Yape, Plin, PagoEfectivo, Cartões'
    }
  },
  CLP: { 
    symbol: '$', 
    regular: '35.000', 
    promo: '6.990', 
    text: 'Pesos Chilenos (CLP)', 
    flag: '🇨🇱',
    badge: 'Webpay / Servipag / Mach',
    payMethods: {
      es: 'Webpay Plus, Redcompra, Servipag, Mach, Tarjetas',
      pt: 'Webpay Plus, Servipag, Mach, Cartões'
    }
  },
  ARS: { 
    symbol: '$', 
    regular: '42.000', 
    promo: '7.900', 
    text: 'Pesos Argentinos (ARS)', 
    flag: '🇦🇷',
    badge: 'Mercado Pago / Rapipago',
    payMethods: {
      es: 'Mercado Pago (dinero en cuenta), Rapipago, Pago Fácil, Tarjetas',
      pt: 'Mercado Pago, Rapipago, Cartões'
    }
  },
  BRL: { 
    symbol: 'R$', 
    regular: '187,00', 
    promo: '37,90', 
    text: 'Reais Brasileiros (BRL)', 
    flag: '🇧🇷',
    badge: 'PIX Imediato ⚡',
    payMethods: {
      es: 'PIX (Aprobación Inmediata), Tarjeta de Crédito, Boleto',
      pt: 'PIX (Acesso Imediato ⚡), Cartão de Crédito em até 4x, Boleto'
    }
  },
  EUR: { 
    symbol: '€', 
    regular: '35,00', 
    promo: '6,50', 
    text: 'Euros (EUR)', 
    flag: '🇪🇺',
    payMethods: {
      es: 'Tarjeta Visa/Mastercard, PayPal, Klarna, Sofort',
      pt: 'Cartão de Crédito, PayPal, Klarna'
    }
  }
};
