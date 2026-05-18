/* global React */
/* =============================================================================
   i18n: single source of truth for every string in the landing.
   Default language: English. Toggle via header button.
============================================================================= */

const COPY = {
  // ─── ENGLISH ───────────────────────────────────────────────────────────────
  en: {
    nav: {
      whyOscar: 'Why Oscar',
      testimonials: 'Testimonials',
      how: 'How it works',
      contact: 'Contact',
      callToday: 'Call today',
      ctaButton: 'Get started',
      langToggleAria: 'Switch to Spanish',
      langToggleLabel: 'ES',
    },

    hero: {
      overline: 'Florida · Your car-buying advisor',
      headlines: {
        perfect:   ['Your perfect car,',          'no hassle.'],
        confidence:['Find your car',              'with confidence.'],
        price:     ['The car you want,',          'at the price you deserve.'],
      },
      sub: 'We help you find exactly the car you need, at the best prices on the market. No pressure, no tricks, no runaround. Just honest options and a real person who guides you.',
      trust: {
        families:   { num: '1,200',  suffix: '+', label: 'Families served' },
        rating:     { num: '4.9',    suffix: '/ 5', label: 'Google reviews' },
        experience: { num: '10',     suffix: ' years', label: 'Of experience' },
      },
      form: {
        overline: 'Get your free advisory',
        head: 'Tell us what you\u2019re looking for. Oscar reaches out in under one business day.',
        sub: 'No commitment. No spam. Just an honest conversation.',
        name: 'Your name',
        email: 'Email',
        phone: 'Phone',
        submit: 'Get my advisory',
        microcopy: 'We only use your info to contact you. No spam, we promise.',
        errors: {
          name: 'Tell us your name.',
          email: 'We need a valid email.',
          phone: 'A 10-digit phone number, please.',
        },
        successHead: 'Got it, {name}.',
        successBody: 'Oscar or someone on his team will reach out within one business day, no pressure, no sales script. Meanwhile, see why our customers choose us.',
        successLink: 'See why Oscar',
      },
    },

    benefits: {
      overline: 'Why Oscar',
      h2: 'Three reasons you\u2019ll drive home in the right car.',
      lead: 'We\u2019ve been doing this in Florida for ten years. We know the market, we know our customers, and we know what happens when someone signs a bad contract. That\u2019s why we work differently.',
      items: [
        {
          icon: 'piggy-bank',
          stat: 'Up to $4,200',
          statLabel: 'average savings',
          title: 'The best prices on the market.',
          body: 'We compare hundreds of cars across Florida to land you a fair price. No hidden markup, no made-up \u201cdoc fees.\u201d',
          details: [
            'Free Carfax reports and market pricing',
            'We negotiate for you across the Rick Case network',
            'Great deals on new and used cars across Florida',
          ],
        },
        {
          icon: 'compass',
          stat: '1 on 1',
          statLabel: 'with a real advisor',
          title: 'Personal guidance.',
          body: 'You talk straight to Oscar or his team. We help you understand which car fits your life, your job, and your budget, in English or Spanish.',
          details: [
            'We explain the numbers in plain words',
            'Recommendations based on your real mileage',
            'Bilingual, we work in English or Spanish',
          ],
        },
        {
          icon: 'shield-check',
          stat: 'Zero',
          statLabel: 'sales pressure',
          title: 'No stress, your pace.',
          body: 'No pushy tactics, no \u201coffer ends today.\u201d You decide when you\u2019re ready, with all the info in your hand.',
          details: [
            'Your time, your terms. No false urgency',
            'We respond within one business day',
            'If it\u2019s not the right car, we\u2019ll tell you',
          ],
        },
        {
          icon: 'package',
          stat: 'Door to door',
          statLabel: 'home delivery available',
          title: 'Not ready to drive it home? We bring it to you. \ud83d\udce6',
          body: 'If you don\u2019t feel like driving it home that first time, no problem. Oscar can deliver your car straight to your door \u2014 new or used, anywhere in Florida.',
          details: [
            'Available for new and used cars across Florida',
            'We coordinate delivery on your schedule',
            'Oscar handles the paperwork at your door',
          ],
        },
      ],
    },

    how: {
      overline: 'How it works',
      h2: 'Three steps. No maze.',
      lead: 'We\u2019re not going to make you lose a whole Saturday at the lot. We start by listening.',
      steps: [
        { n: '01', icon: 'message-square', h: 'Tell us what you need.', p: 'Leave your name, email, and phone. We call you to understand your day-to-day, your budget, and what you need from a car.', meta: 'Takes 3 minutes' },
        { n: '02', icon: 'list-checks',    h: 'Get real options.',      p: 'We send you 3 to 5 cars that actually fit, with history, price, and monthly payment laid out clearly. No fine print.', meta: 'Within 24 business hours' },
        { n: '03', icon: 'key-round',      h: 'Drive your car home.',   p: 'When you\u2019re ready, we invite you in to see it, drive it, and sign on your timeline. If you decide no, that\u2019s fine too. No pressure.', meta: 'You decide when' },
      ],
    },

    testimonials: {
      overline: 'Real customers',
      h2: 'Florida families already driving the car they wanted.',
      lead: 'These are a few of the customers we\u2019ve worked with this year. No script, no actors. Real people who showed up with a question and left with a car that fits their life.',
      rating: { num: '4.9 / 5', label: 'Average across 312 reviews' },
      featured: {
        name: 'Carlos Ramírez',
        meta: 'Maintenance technician · Orlando, FL',
        photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80&auto=format&fit=crop',
        quoteBefore: 'I thought they\u2019d treat me like just another sale. Oscar sat down with me, looked at the numbers with me, and told me which SUV worked for me and which one didn\u2019t. I drove off with a ',
        quoteAccent: 'used Honda CR-V I can actually afford',
        quoteAfter: ', and my wife finally sleeps soundly.',
        carLabel: 'His car',
        carName: '2021 Honda CR-V',
      },
      small: [
        {
          name: 'María Linares',
          meta: 'Nurse · Miami, FL',
          photo: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80&auto=format&fit=crop',
          quote: '"They speak Spanish and walk you through everything patiently. My credit wasn\u2019t perfect and other places shut the door. Oscar got me a Toyota Corolla with a monthly payment that actually fits my budget."',
        },
        {
          name: 'Jasmine Thompson',
          meta: 'First-time buyer · Tampa, FL',
          photo: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=400&q=80&auto=format&fit=crop',
          quote: '"It was my first car and I had a thousand questions. They answered every single one, no making me feel dumb. They didn\u2019t rush me. I went home, thought about it over the weekend, came back Monday and signed."',
        },
        {
          name: 'Roberto Delgado',
          meta: 'Small business owner · Hialeah, FL',
          photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80&auto=format&fit=crop',
          quote: '"I needed a pickup for work, not to show off. They helped me find an F-150 with real mileage, not the 200k-mile ones other places try on you. Three months in, still running like a champ."',
        },
      ],
    },

    cta: {
      overline: 'Your next step',
      h2line1: 'Send a message.',
      h2line2: 'We reply like a friend, not a salesperson.',
      lead: 'No long forms, no 8pm phone calls, no weird promises. Just an honest conversation about the car you need.',
      badges: [
        { icon: 'clock',          text: 'Reply within 1 business day' },
        { icon: 'message-circle', text: 'Service in English or Spanish' },
        { icon: 'shield-check',   text: 'Your info is safe with us' },
      ],
      card: {
        head: 'Start with three details.',
        sub: 'We\u2019ll reach out to understand what you need.',
        submit: 'Let\u2019s talk about your next car',
        microcopy: 'Your information is only used so Oscar can contact you.',
        successHead: 'Thanks, {name}.',
        successBody: 'We got your message. Oscar or someone on his team will be in touch within one business day to start looking at options.',
      },
    },

    footer: {
      sig: 'Honest options. Forward movement.',
      copyright: '© 2026 Oscar Get me a Car',
    },

    tweaks: {
      title: 'Oscar Landing',
      heroSection: 'Hero',
      headlineLabel: 'Headline',
      headlineOpts: [
        { value: 'perfect',    label: 'No hassle' },
        { value: 'confidence', label: 'Confidence' },
        { value: 'price',      label: 'Right price' },
      ],
      photoLabel: 'Photo',
      photoOpts: [
        { value: 'dark_sedan', label: 'Dark sedan' },
        { value: 'silver_suv', label: 'Silver SUV' },
        { value: 'truck',      label: 'Pickup truck' },
      ],
    },
  },

  // ─── SPANISH ───────────────────────────────────────────────────────────────
  es: {
    nav: {
      whyOscar: 'Por qué Oscar',
      testimonials: 'Testimonios',
      how: 'Cómo funciona',
      contact: 'Contacto',
      callToday: 'Llámanos',
      ctaButton: 'Empezar ahora',
      langToggleAria: 'Cambiar a inglés',
      langToggleLabel: 'EN',
    },

    hero: {
      overline: 'Florida · Tu consejero de autos',
      headlines: {
        perfect:    ['Tu auto perfecto,',         'sin complicaciones.'],
        confidence: ['Encuentra tu auto',         'con confianza.'],
        price:      ['El auto que buscas,',       'al precio que mereces.'],
      },
      sub: 'Te ayudamos a encontrar exactamente el auto que necesitas, con los mejores precios del mercado. Sin presión, sin trucos, sin desgaste. Solo opciones honestas y una persona real que te guía.',
      trust: {
        families:   { num: '1,200', suffix: '+',     label: 'Familias atendidas' },
        rating:     { num: '4.9',   suffix: '/ 5',   label: 'Reseñas en Google' },
        experience: { num: '10',    suffix: ' años', label: 'De experiencia' },
      },
      form: {
        overline: 'Recibe tu asesoría gratis',
        head: 'Cuéntanos qué buscas. Oscar te contacta en menos de un día hábil.',
        sub: 'Sin compromiso. Sin spam. Solo una conversación honesta.',
        name: 'Tu nombre',
        email: 'Email',
        phone: 'Teléfono',
        submit: 'Quiero mi asesoría',
        microcopy: 'Solo usamos tus datos para contactarte. Nada de spam, lo prometemos.',
        errors: {
          name: 'Cuéntanos tu nombre.',
          email: 'Necesitamos un email válido.',
          phone: 'Un teléfono de 10 dígitos, por favor.',
        },
        successHead: 'Recibido, {name}.',
        successBody: 'Oscar o alguien de su equipo te contactará en menos de un día hábil, sin presión y sin guion de venta. Mientras tanto, mira por qué nos eligen nuestros clientes.',
        successLink: 'Ver por qué Oscar',
      },
    },

    benefits: {
      overline: 'Por qué Oscar',
      h2: 'Tres razones por las que vas a llegar a casa con el auto correcto.',
      lead: 'Llevamos diez años haciendo esto en Florida. Conocemos el mercado, conocemos a nuestros clientes, y sabemos lo que pasa cuando alguien firma un mal contrato. Por eso trabajamos diferente.',
      items: [
        {
          icon: 'piggy-bank',
          stat: 'Hasta $4,200',
          statLabel: 'de ahorro promedio',
          title: 'Los mejores precios del mercado.',
          body: 'Comparamos cientos de autos en Florida para conseguirte el precio justo. Sin sobreprecio escondido, sin "tarifas de papeleo" inventadas.',
          details: [
            'Reportes de Carfax y precios de mercado, gratis',
            'Negociamos por ti con la red de Rick Case',
            'Excelentes ofertas en autos nuevos y usados en Florida',
          ],
        },
        {
          icon: 'compass',
          stat: '1 a 1',
          statLabel: 'con un asesor real',
          title: 'Asesoría personalizada.',
          body: 'Hablas directo con Oscar o su equipo. Te ayudamos a entender qué auto se ajusta a tu vida, tu trabajo y tu presupuesto, en español o en inglés.',
          details: [
            'Te explicamos los números en palabras claras',
            'Recomendaciones según tu kilometraje real',
            'Bilingüe, atendemos en español o inglés',
          ],
        },
        {
          icon: 'shield-check',
          stat: 'Cero',
          statLabel: 'presión de venta',
          title: 'Sin estrés, a tu ritmo.',
          body: 'Nada de tácticas agresivas ni "ofertas que vencen hoy". Tomas tu decisión cuando estés listo, con toda la información en la mano.',
          details: [
            'Tu tiempo, tus términos. Sin urgencia falsa',
            'Te respondemos en menos de un día hábil',
            'Si no es el auto correcto, te lo decimos',
          ],
        },
        {
          icon: 'package',
          stat: 'A tu puerta',
          statLabel: 'entrega a domicilio disponible',
          title: '¿No quieres manejarlo a casa esa primera vez? Te lo llevamos. 📦',
          body: 'Si no te apetece manejar el auto a casa la primera vez, no hay problema. Oscar puede entregarlo directo en tu puerta, nuevo o usado, en cualquier parte de Florida.',
          details: [
            'Disponible para autos nuevos y usados en Florida',
            'Coordinamos la entrega a tu horario',
            'Oscar lleva el papeleo directo a tu puerta',
          ],
        },
      ],
    },

    how: {
      overline: 'Cómo funciona',
      h2: 'Tres pasos. Sin laberintos.',
      lead: 'No te vamos a hacer perder un sábado entero en el lote. Empezamos por escucharte.',
      steps: [
        { n: '01', icon: 'message-square', h: 'Cuéntanos qué buscas.', p: 'Déjanos tu nombre, email y teléfono. Te llamamos para entender tu día a día, tu presupuesto y qué necesitas del auto.', meta: 'Toma 3 minutos' },
        { n: '02', icon: 'list-checks',    h: 'Recibe opciones reales.', p: 'Te enviamos 3 a 5 opciones de autos que sí encajan, con historial, precio y pago mensual claros, sin letra chica.', meta: 'En 24 horas hábiles' },
        { n: '03', icon: 'key-round',      h: 'Maneja tu auto.', p: 'Cuando estés listo, te invitamos a verlo, manejarlo y firmar a tu ritmo. Si decides que no, está bien. Sin presión.', meta: 'Tú decides cuándo' },
      ],
    },

    testimonials: {
      overline: 'Testimonios reales',
      h2: 'Familias de Florida que ya manejan el auto que querían.',
      lead: 'Estos son algunos de los clientes con los que hemos trabajado este año. Sin guion, sin actores. Gente real que llegó con una duda y se fue con un auto que sí les sirve.',
      rating: { num: '4.9 / 5', label: 'Promedio de 312 reseñas' },
      featured: {
        name: 'Carlos Ramírez',
        meta: 'Técnico de mantenimiento · Orlando, FL',
        photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80&auto=format&fit=crop',
        quoteBefore: 'Pensé que iban a tratarme como una venta más. Oscar se sentó conmigo, miró los números conmigo, y me dijo cuál SUV me convenía y cuál no. Salí con una ',
        quoteAccent: 'Honda CR-V usada que sí me alcanza',
        quoteAfter: ', y mi esposa por fin duerme tranquila.',
        carLabel: 'Su auto',
        carName: '2021 Honda CR-V',
      },
      small: [
        {
          name: 'María Linares',
          meta: 'Enfermera · Miami, FL',
          photo: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80&auto=format&fit=crop',
          quote: '"Hablan español y te explican todo con paciencia. Mi crédito no era perfecto y otros me cerraron la puerta. Oscar me consiguió un Toyota Corolla con un pago mensual que sí cabe en mi presupuesto."',
        },
        {
          name: 'Jasmine Thompson',
          meta: 'Primera compradora · Tampa, FL',
          photo: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=400&q=80&auto=format&fit=crop',
          quote: '"Era mi primer auto y tenía mil preguntas. Me respondieron todas, sin hacerme sentir tonta. No me apuraron. Me fui a casa, lo pensé un fin de semana, y volví el lunes a firmar."',
        },
        {
          name: 'Roberto Delgado',
          meta: 'Dueño de pequeño negocio · Hialeah, FL',
          photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80&auto=format&fit=crop',
          quote: '"Necesitaba una pickup para el trabajo, no para presumir. Me ayudaron a encontrar una F-150 con kilometraje real, no las de 200 mil millas que te muestran en otros lados. Tres meses después, sigue trabajando perfecto."',
        },
      ],
    },

    cta: {
      overline: 'Tu siguiente paso',
      h2line1: 'Manda un mensaje.',
      h2line2: 'Te respondemos como amigo, no como vendedor.',
      lead: 'Sin formularios largos, sin llamadas a las 8 de la noche, sin promesas raras. Solo una conversación honesta sobre el auto que necesitas.',
      badges: [
        { icon: 'clock',          text: 'Respuesta en menos de 1 día hábil' },
        { icon: 'message-circle', text: 'Atención en español o inglés' },
        { icon: 'shield-check',   text: 'Tus datos están seguros' },
      ],
      card: {
        head: 'Empieza con tres datos.',
        sub: 'Te contactamos para entender qué necesitas.',
        submit: 'Hablemos de tu próximo auto',
        microcopy: 'Tu información es solo para que Oscar pueda contactarte.',
        successHead: 'Gracias, {name}.',
        successBody: 'Recibimos tu mensaje. Oscar o alguien de su equipo se pone en contacto contigo en menos de un día hábil para empezar a buscar opciones.',
      },
    },

    footer: {
      sig: 'Opciones honestas. Movimiento hacia adelante.',
      copyright: '© 2026 Oscar Get me a Car',
    },

    tweaks: {
      title: 'Oscar Landing',
      heroSection: 'Hero',
      headlineLabel: 'Titular',
      headlineOpts: [
        { value: 'perfect',    label: 'Sin complicaciones' },
        { value: 'confidence', label: 'Con confianza' },
        { value: 'price',      label: 'Al precio que mereces' },
      ],
      photoLabel: 'Foto',
      photoOpts: [
        { value: 'dark_sedan', label: 'Sedán oscuro' },
        { value: 'silver_suv', label: 'SUV plateada' },
        { value: 'truck',      label: 'Pickup' },
      ],
    },
  },
};

window.COPY = COPY;
