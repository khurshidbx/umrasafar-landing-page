<template>
  <div class="font-inter text-ctext bg-white">

    <!-- ═══════════════════════════════════════════ NAVBAR ═══ -->
    <nav
      ref="navbar"
      class="fixed top-0 left-0 right-0 z-50 bg-white border-b border-border shadow-sm"
    >
      <div class="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

        <!-- Logo -->
        <a href="#" class="flex items-center gap-2">
          <img :src="kabaLogo" alt="UmraSafar" class="h-9 w-auto" />
          <span class="font-jakarta font-bold text-xl text-dark">UmraSafar</span>
        </a>

        <!-- Desktop nav links -->
        <div class="hidden md:flex items-center gap-8">
          <a
            v-for="item in navLinks"
            :key="item.href"
            :href="item.href"
            @click="activeSection = item.id"
            class="text-sm font-medium relative py-1 transition-colors duration-200 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:bg-mid after:transition-all after:duration-300"
            :class="activeSection === item.id
              ? 'text-mid after:w-full'
              : 'text-ctext/70 hover:text-mid after:w-0 hover:after:w-full'"
          >{{ item.label }}</a>
        </div>

        <!-- Right actions -->
        <div class="hidden md:flex items-center gap-3">
          <!-- Language select -->
          <select
            v-model="lang"
            class="text-sm font-semibold text-ctext bg-white border border-border rounded-lg px-3 py-1.5 outline-none cursor-pointer hover:border-mid transition-colors"
          >
            <option value="UZ">🇺🇿 UZ</option>
            <option value="RU">🇷🇺 RU</option>
            <option value="EN">🇬🇧 EN</option>
          </select>
          <a
            href="tel:+998901234567"
            class="flex items-center gap-1 text-sm font-medium rounded-full px-4 py-2 transition-all"
            style="border:1.5px solid #1a4d3a; color:#1a4d3a;"
            onmouseenter="this.style.background='#1a4d3a'; this.style.color='#ffffff';"
            onmouseleave="this.style.background='transparent'; this.style.color='#1a4d3a';"
          >📞 +998 99 201 41 41</a>
        </div>

        <!-- Mobile right: lang + phone + burger -->
        <div class="md:hidden flex items-center gap-2">
          <select
            v-model="lang"
            class="h-9 rounded-xl border border-border outline-none cursor-pointer text-xs font-semibold bg-white px-2 appearance-none"
          >
            <option value="UZ">🇺🇿 UZ</option>
            <option value="RU">🇷🇺 RU</option>
            <option value="EN">🇬🇧 EN</option>
          </select>
          <a
            href="tel:+998992014141"
            class="w-9 h-9 rounded-xl flex items-center justify-center transition-all"
            style="background:#1a4d3a; color:#ffffff;"
            aria-label="Qo'ng'iroq"
          >
            <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
            </svg>
          </a>
          <button
            class="flex flex-col gap-1.5 p-2"
            @click="mobileOpen = !mobileOpen"
            aria-label="Menu"
          >
            <span
              class="block w-6 h-0.5 bg-ctext transition-all duration-300"
              :class="mobileOpen ? 'rotate-45 translate-y-2' : ''"
            ></span>
            <span
              class="block w-6 h-0.5 bg-ctext transition-all duration-300"
              :class="mobileOpen ? 'opacity-0' : ''"
            ></span>
            <span
              class="block w-6 h-0.5 bg-ctext transition-all duration-300"
              :class="mobileOpen ? '-rotate-45 -translate-y-2' : ''"
            ></span>
          </button>
        </div>
      </div>

      <!-- Mobile drawer -->
      <div
        class="md:hidden overflow-hidden transition-all duration-300 bg-white border-t border-border"
        :class="mobileOpen ? 'max-h-screen shadow-lg' : 'max-h-0'"
      >
        <div class="px-4 pt-3 pb-4 flex flex-col gap-1">
          <a
            v-for="item in navLinks"
            :key="item.href"
            :href="item.href"
            @click="activeSection = item.id; mobileOpen = false"
            class="flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold transition-all"
            :class="activeSection === item.id
              ? 'text-mid'
              : 'text-ctext/70 hover:bg-gray-50'"
            :style="activeSection === item.id ? 'background:#f0fdf4;' : ''"
          >
            <span
              class="w-2 h-2 rounded-full shrink-0 transition-all"
              :style="activeSection === item.id ? 'background:#1a4d3a;' : 'background:#cbd5e1;'"
            ></span>
            {{ item.label }}
          </a>

          <!-- Phone button -->
          <a
            href="tel:+998992014141"
            class="mt-3 flex items-center justify-center gap-2 text-white font-semibold text-sm rounded-2xl py-4 transition-all"
            style="background:#1a4d3a;"
            @click="mobileOpen = false"
          >
            <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
            </svg>
            +998 99 201 41 41
          </a>
        </div>
      </div>
    </nav>

    <!-- ═══════════════════════════════════════════ HERO ══════ -->
    <section class="pt-24 pb-10 md:pt-32 md:pb-20 px-6" style="background:#F1FDF4;">
      <div class="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        <!-- Left -->
        <div>
          <div
            class="inline-block mb-6 px-3 py-1 bg-green-100 text-green-800 text-xs font-bold uppercase tracking-widest rounded-sm animate-fade-up"
            style="animation-delay:0.05s"
          >{{ t.heroBadge }}</div>

          <h1
            class="font-jakarta font-black text-3xl sm:text-4xl lg:text-6xl text-ctext leading-tight mb-6 animate-fade-up whitespace-pre-line"
            style="animation-delay:0.15s"
          >{{ t.heroTitle }}</h1>

          <p
            class="text-muted text-base lg:text-xl font-light leading-relaxed mb-8 animate-fade-up"
            style="animation-delay:0.25s"
          >{{ t.heroDesc }}</p>

          <div
            class="flex flex-wrap gap-4 animate-fade-up"
            style="animation-delay:0.35s"
          >
            <a
              href="#cta"
              class="font-semibold rounded-full px-8 py-4 transition-all shadow-md hover:shadow-lg"
              style="background:#1a4d3a; color:#ffffff;"
              onmouseenter="this.style.background='#0d2b1f'"
              onmouseleave="this.style.background='#1a4d3a'"
            >{{ t.demoBtn }}</a>
          </div>
        </div>

        <!-- Right — hero image -->
        <div class="flex justify-center lg:justify-end animate-fade-up" style="animation-delay:0.2s">
          <img
            :src="heroImg"
            alt="Umra safari"
            class="w-full max-w-lg rounded-3xl shadow-2xl object-contain"
          />
        </div>
      </div>
    </section>

    <!-- ════════════════════════════════════════ CAROUSEL ═════ -->
    <section class="bg-sand py-10 md:py-20 px-6">
      <div class="max-w-7xl mx-auto">
        <div class="mb-6 md:mb-10 reveal text-center">
          <h2 class="font-jakarta font-extrabold text-3xl text-ctext mb-2">{{ t.carouselTitle }}</h2>
          <p class="text-muted text-base">{{ t.carouselSub }}</p>
        </div>

        <!-- Browser frame -->
        <div class="relative reveal max-w-4xl mx-auto">
          <div class="bg-gray-100 rounded-t-xl px-4 py-3 flex items-center gap-2 border border-border border-b-0">
            <div class="w-3 h-3 rounded-full bg-red-400"></div>
            <div class="w-3 h-3 rounded-full bg-yellow-400"></div>
            <div class="w-3 h-3 rounded-full bg-green-400"></div>
            <div class="ml-4 flex-1 bg-white rounded-full px-4 py-1 text-xs text-muted">
              app.umrasafar.uz
            </div>
          </div>

          <!-- Slides container -->
          <div class="relative overflow-hidden rounded-b-xl border border-border border-t-0 bg-gray-50" style="aspect-ratio:16/9">
            <div
              v-for="(slide, i) in carouselSlides"
              :key="i"
              class="absolute inset-0 transition-all duration-500"
              :style="{
                opacity: carouselIndex === i ? 1 : 0,
                transform: carouselIndex === i ? 'translateX(0)' : (i < carouselIndex ? 'translateX(-40px)' : 'translateX(40px)')
              }"
            >
              <img
                :src="slide.img"
                :alt="slide.label"
                class="w-full h-full object-contain bg-white"
              />
            </div>

            <!-- Arrows -->
            <button
              @click="prevSlide"
              class="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/90 shadow flex items-center justify-center hover:bg-white transition-all"
            >
              <svg class="w-4 h-4 text-ctext" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><path d="M15 19l-7-7 7-7"/></svg>
            </button>
            <button
              @click="nextSlide"
              class="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/90 shadow flex items-center justify-center hover:bg-white transition-all"
            >
              <svg class="w-4 h-4 text-ctext" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><path d="M9 5l7 7-7 7"/></svg>
            </button>
          </div>

          <!-- Dots -->
          <div class="flex justify-center gap-2 mt-4">
            <button
              v-for="(_, i) in carouselSlides"
              :key="i"
              @click="goToSlide(i)"
              class="rounded-full transition-all duration-300"
              :class="carouselIndex === i ? 'w-6 h-2 bg-mid' : 'w-2 h-2 bg-border'"
            ></button>
          </div>
        </div>
      </div>
    </section>

    <!-- ═══════════════════════════════════════════ STATS ═════ -->
    <section class="bg-white py-10 md:py-16 px-6">
      <div class="max-w-7xl mx-auto">
        <div class="grid grid-cols-2 md:grid-cols-4 gap-3 reveal">
          <div
            v-for="(stat, i) in stats"
            :key="i"
            class="text-center px-3 py-5 rounded-2xl border border-border"
          >
            <div
              class="font-jakarta font-black text-3xl md:text-4xl text-mid mb-1 leading-tight"
              :data-target="stat.value"
              :data-suffix="stat.suffix"
              :ref="el => { if (el) statRefs[i] = el as HTMLElement }"
            >0</div>
            <div class="text-xs md:text-sm text-muted leading-snug mt-1">{{ stat.label }}</div>
          </div>
        </div>
      </div>
    </section>

    <!-- ══════════════════════════════════════ FEATURES ═══════ -->
    <section id="features" class="bg-sand py-10 md:py-20 px-6">
      <div class="max-w-7xl mx-auto">
        <div class="mb-6 md:mb-12 reveal text-center">
          <h2 class="font-jakarta font-extrabold text-3xl text-ctext mb-2">{{ t.featuresTitle }}</h2>
          <p class="text-muted text-base">{{ t.featuresSub }}</p>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div
            v-for="(f, i) in features"
            :key="i"
            class="reveal bg-white rounded-2xl p-8 border border-border cursor-default
                   transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-mid"
          >
            <div class="w-12 h-12 bg-light rounded-xl flex items-center justify-center text-2xl mb-5">
              {{ f.icon }}
            </div>
            <h3 class="font-jakarta font-bold text-base text-ctext mb-2">{{ f.title }}</h3>
            <p class="text-muted text-sm leading-relaxed">{{ f.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- ══════════════════════════════════ HOW IT WORKS ═══════ -->
    <section id="how" class="bg-light py-10 md:py-20 px-6">
      <div class="max-w-4xl mx-auto">
        <div class="mb-6 md:mb-12 reveal text-center">
          <h2 class="font-jakarta font-extrabold text-3xl text-ctext mb-2">{{ t.howTitle }}</h2>
          <p class="text-muted text-base">{{ t.howSub }}</p>
        </div>

        <!-- Mobile: vertical cards / Desktop: horizontal -->
        <div class="flex flex-col md:flex-row gap-4 md:gap-6">
          <div
            v-for="(step, i) in steps"
            :key="i"
            class="reveal flex-1 bg-white rounded-2xl p-6 md:p-8 border border-border shadow-sm relative overflow-hidden"
          >
            <!-- Background number watermark -->
            <div class="absolute -right-2 -top-3 font-jakarta font-black text-7xl text-mid/5 select-none">
              {{ step.num }}
            </div>

            <!-- Step number badge -->
            <div class="inline-flex items-center justify-center w-10 h-10 rounded-xl mb-5 font-jakarta font-black text-sm text-white" style="background:#1a4d3a;">
              {{ step.num }}
            </div>

            <!-- Connector arrow (desktop only, not last) -->
            <div v-if="i < steps.length - 1" class="hidden md:block absolute -right-3 top-1/2 -translate-y-1/2 z-10">
              <div class="w-6 h-6 rounded-full bg-mid/20 flex items-center justify-center">
                <svg class="w-3 h-3 text-mid" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
                  <path d="M9 5l7 7-7 7"/>
                </svg>
              </div>
            </div>

            <h3 class="font-jakarta font-bold text-base text-ctext mb-2">{{ step.title }}</h3>
            <p class="text-muted text-sm leading-relaxed">{{ step.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- ════════════════════════════════════════ PRICING ═════ -->
    <section id="pricing" class="bg-sand py-10 md:py-20 px-6">
      <div class="max-w-7xl mx-auto">
        <div class="mb-6 md:mb-12 reveal text-center">
          <h2 class="font-jakarta font-extrabold text-3xl text-ctext mb-2">{{ t.pricingTitle }}</h2>
        </div>

        <div class="grid md:grid-cols-3 gap-6 items-center">
          <div
            v-for="(plan, i) in pricingPlans"
            :key="i"
            class="reveal relative rounded-2xl p-8 border transition-all duration-300"
            :class="plan.highlighted
              ? 'border-2 border-mid shadow-xl scale-105 bg-white'
              : 'border border-border bg-white hover:border-mid/50'"
          >
            <!-- Popular badge -->
            <div
              v-if="plan.highlighted"
              class="absolute -top-3 left-1/2 -translate-x-1/2 bg-mid text-white text-xs font-bold px-4 py-1 rounded-full"
            >{{ t.popular }}</div>

            <h3 class="font-jakarta font-bold text-lg text-ctext mb-1">{{ plan.name }}</h3>
            <div class="flex items-end gap-1 mb-1">
              <span
                class="font-jakarta font-black text-4xl"
                :class="plan.highlighted ? 'text-mid' : 'text-ctext'"
              >${{ plan.price }}</span>
              <span class="text-muted text-sm mb-1">/{{ t.month }}</span>
            </div>
            <p class="text-muted text-sm mb-6">{{ plan.desc }}</p>

            <ul class="space-y-3 mb-8">
              <li
                v-for="feat in plan.features"
                :key="feat"
                class="flex items-start gap-2 text-sm text-ctext/80"
              >
                <svg class="w-4 h-4 text-mid mt-0.5 shrink-0" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><path d="M5 13l4 4L19 7"/></svg>
                {{ feat }}
              </li>
            </ul>

            <a
              href="#cta"
              class="block text-center font-semibold rounded-full py-3 transition-all"
              :class="plan.highlighted
                ? 'bg-mid text-white hover:bg-dark'
                : 'border-2 border-mid text-mid hover:bg-mid hover:text-white'"
            >{{ t.startBtn }}</a>
          </div>
        </div>
      </div>
    </section>

    <!-- ══════════════════════════════════════════ CTA ════════ -->
    <section id="cta" class="py-10 md:py-20 px-6 relative overflow-hidden" style="background:#1a4d3a">
      <div
        class="absolute inset-0 pointer-events-none"
        style="background: repeating-linear-gradient(45deg, rgba(255,255,255,0.03) 0px, rgba(255,255,255,0.03) 1px, transparent 1px, transparent 12px)"
      ></div>

      <div class="max-w-2xl mx-auto relative flex flex-col items-center text-center gap-10">

        <!-- Top -->
        <div class="reveal w-full">
          <h2 class="font-jakarta font-black text-5xl text-white mb-4 leading-tight">Kontakt</h2>
          <p class="text-white/60 text-lg mb-8">{{ t.ctaDesc }}</p>
          <div class="flex flex-wrap justify-center gap-4">
            <a
              href="https://t.me/+998992014141"
              target="_blank"
              class="inline-flex items-center gap-3 bg-[#229ED9] hover:bg-[#1a8bbf] text-white font-semibold rounded-full px-7 py-4 transition-all shadow-lg hover:shadow-xl w-fit mr-3"
            >
              <svg class="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="currentColor">
                <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
              </svg>
              Telegram
            </a>

            <a
              href="https://instagram.com/umrasafar"
              target="_blank"
              class="inline-flex items-center gap-3 bg-gradient-to-r from-[#f09433] via-[#e6683c] to-[#dc2743] hover:opacity-90 text-white font-semibold rounded-full px-7 py-4 transition-all shadow-lg hover:shadow-xl w-fit"
            >
              <svg class="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
              </svg>
              Instagram
            </a>

            <!-- <img :src="kabaLogo" alt="UmraSafar" class="h-10 w-auto mt-2 opacity-80" /> -->
          </div>
        </div>

        <!-- Form -->
        <div class="reveal w-full">
          <form
            @submit.prevent="submitForm"
            class="space-y-4"
            :class="formState === 'success' ? 'hidden' : ''"
          >
            <input
              v-model="form.name"
              type="text"
              :placeholder="t.formName"
              required
              class="w-full rounded-xl px-4 py-3.5 text-sm text-ctext placeholder-muted/60 border outline-none transition-all"
              style="background:#FAFAF7; border-color:#e2e8f0; color:#1a2e1f;"
              @focus="($event.target as HTMLElement).style.borderColor='#1a4d3a'"
              @blur="($event.target as HTMLElement).style.borderColor='#e2e8f0'"
            />
            <input
              v-model="form.phone"
              type="tel"
              :placeholder="t.formPhone"
              required
              class="w-full rounded-xl px-4 py-3.5 text-sm text-ctext placeholder-muted/60 border outline-none transition-all"
              style="background:#FAFAF7; border-color:#e2e8f0; color:#1a2e1f;"
              @focus="($event.target as HTMLElement).style.borderColor='#1a4d3a'"
              @blur="($event.target as HTMLElement).style.borderColor='#e2e8f0'"
            />
            <input
              v-model="form.email"
              type="email"
              :placeholder="t.formEmail"
              class="w-full rounded-xl px-4 py-3.5 text-sm text-ctext placeholder-muted/60 border outline-none transition-all"
              style="background:#FAFAF7; border-color:#e2e8f0; color:#1a2e1f;"
              @focus="($event.target as HTMLElement).style.borderColor='#1a4d3a'"
              @blur="($event.target as HTMLElement).style.borderColor='#e2e8f0'"
            />

            <button
              type="submit"
              :disabled="formState === 'loading'"
              class="w-full bg-green-600 hover:bg-green-500 text-white font-semibold rounded-full py-4 transition-all flex items-center justify-center gap-2 disabled:opacity-70"
            >
              <svg
                v-if="formState === 'loading'"
                class="w-4 h-4 animate-spin"
                fill="none" viewBox="0 0 24 24"
              >
                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/>
                <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
              </svg>
              <span>{{ formState === 'loading' ? t.sending : t.sendBtn }}</span>
            </button>

            <p v-if="formState === 'error'" class="text-red-400 text-sm text-center">
              {{ t.formError }}
            </p>
          </form>

          <!-- Success state -->
          <div
            v-if="formState === 'success'"
            class="rounded-2xl border border-green-500/40 bg-green-500/10 p-8 text-center"
          >
            <div class="text-4xl mb-3">✅</div>
            <p class="text-white font-semibold text-lg mb-1">{{ t.formSuccess }}</p>
            <p class="text-white/60 text-sm">{{ t.formSuccessSub }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- minimal copyright -->
    <div class="bg-[#0d2b1f] py-4 text-center text-white/30 text-xs">
      © {{ new Date().getFullYear() }} UmraSafar. Barcha huquqlar himoyalangan.
    </div>

  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'
import heroImg from '~/assets/images/hero.png'
import kabaLogo from '~/assets/images/kaba2.svg'
import img1 from '~/assets/images/image_2026-05-14_10-53-43.png'
import img2 from '~/assets/images/image_2026-05-14_10-55-20.png'

// ─── Google Fonts ────────────────────────────────────────
useHead({
  title: 'UmraSafar CRM — Umra safarlarini professional boshqaring',
  link: [
    {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@700;800;900&family=Inter:wght@300;400;500&display=swap',
    },
    {
      rel: 'icon',
      type: 'image/svg+xml',
      href: kabaLogo,
    },
  ],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'SoftwareApplication',
        name: 'UmraSafar CRM',
        applicationCategory: 'BusinessApplication',
        description: 'Umra safarlarini boshqarish uchun professional CRM tizimi',
        url: 'https://umrasafar.uz',
        offers: { '@type': 'Offer', price: '19', priceCurrency: 'USD' },
        operatingSystem: 'Web',
      }),
    },
  ],
})

// ─── Language ────────────────────────────────────────────
type Lang = 'UZ' | 'RU' | 'EN'
const lang = ref<Lang>('UZ')

const translations = {
  UZ: {
    heroBadge: 'Umrasafar uchun CRM',
    heroTitle: 'Umra safarlarini\noson boshqaring',
    heroDesc: 'Ziyoratchilar, paketlar, to\'lovlar va mehmonxonalar — barchasi bitta tizimda.',
    demoBtn: 'Demo so\'rash',
    contactBtn: 'Kontaktlar',
    dashTitle: 'Boshqaruv paneli',
    dashZiyoratchi: 'Ziyoratchi',
    dashPaket: 'Paket',
    dashMonthly: 'Oylik ziyoratchilar',
    dashPayments: 'Oxirgi to\'lovlar',
    paid: 'To\'langan',
    pending: 'Kutilmoqda',
    carouselTitle: 'Tizim ko\'rinishi',
    carouselSub: 'Real interfeys va funksiyalar bilan tanishing',
    featuresTitle: 'Barcha imkoniyatlar',
    featuresSub: 'Tizimimiz sizga nima beradi',
    howTitle: 'Qanday ishlaydi',
    howSub: 'Uch oddiy qadamda ishni boshlang',
    pricingTitle: 'Narxlar',
    pricingSub: 'Sizning biznesingizga mos tarif tanlang',
    popular: 'Eng mashhur',
    month: 'oy',
    startBtn: 'Boshlash',
    ctaTitle: 'Bugun boshlang',
    ctaDesc: 'Dastlabki 14 kun bepul',
    formName: 'Ismingiz',
    formPhone: 'Telefon raqam',
    formEmail: 'Email (ixtiyoriy)',
    sendBtn: 'Yuborish',
    sending: 'Yuborilmoqda...',
    formError: 'Xatolik yuz berdi. Qaytadan urinib ko\'ring.',
    formSuccess: 'Muvaffaqiyatli yuborildi!',
    formSuccessSub: '24 soat ichida siz bilan bog\'lanamiz.',
    footerDesc: 'Umra safarlarini boshqarish uchun professional CRM tizimi.',
    footerLinks: 'Havolalar',
    footerContact: 'Kontakt',
    rights: 'Barcha huquqlar himoyalangan.',
  },
  RU: {
    heroBadge: 'Управляйте умра-турами',
    heroTitle: 'Профессиональное управление умра-турами',
    heroDesc: 'Паломники, пакеты, платежи и отели — всё в одной системе.',
    demoBtn: 'Запросить демо',
    contactBtn: 'Контакты',
    dashTitle: 'Панель управления',
    dashZiyoratchi: 'Паломник',
    dashPaket: 'Пакет',
    dashMonthly: 'Паломники за месяц',
    dashPayments: 'Последние платежи',
    paid: 'Оплачено',
    pending: 'Ожидает',
    carouselTitle: 'Интерфейс системы',
    carouselSub: 'Ознакомьтесь с реальным интерфейсом и функциями',
    featuresTitle: 'Все возможности',
    featuresSub: 'Что даёт вам наша система',
    howTitle: 'Как это работает',
    howSub: 'Начните работу за три простых шага',
    pricingTitle: 'Тарифы',
    pricingSub: 'Выберите подходящий тариф для вашего бизнеса',
    popular: 'Популярный',
    month: 'мес',
    startBtn: 'Начать',
    ctaTitle: 'Начните сегодня',
    ctaDesc: 'Первые 14 дней бесплатно',
    formName: 'Ваше имя',
    formPhone: 'Номер телефона',
    formEmail: 'Email (необязательно)',
    sendBtn: 'Отправить',
    sending: 'Отправка...',
    formError: 'Произошла ошибка. Попробуйте снова.',
    formSuccess: 'Успешно отправлено!',
    formSuccessSub: 'Мы свяжемся с вами в течение 24 часов.',
    footerDesc: 'Профессиональная CRM-система для управления умра-турами.',
    footerLinks: 'Ссылки',
    footerContact: 'Контакт',
    rights: 'Все права защищены.',
  },
  EN: {
    heroBadge: 'Manage Umrah Tours',
    heroTitle: 'Professionally manage Umrah tours',
    heroDesc: 'Pilgrims, packages, payments and hotels — all in one system.',
    demoBtn: 'Request Demo',
    contactBtn: 'Contact Us',
    dashTitle: 'Dashboard',
    dashZiyoratchi: 'Pilgrim',
    dashPaket: 'Package',
    dashMonthly: 'Monthly pilgrims',
    dashPayments: 'Recent payments',
    paid: 'Paid',
    pending: 'Pending',
    carouselTitle: 'System Interface',
    carouselSub: 'Explore the real interface and features',
    featuresTitle: 'All Features',
    featuresSub: 'What our system offers you',
    howTitle: 'How It Works',
    howSub: 'Get started in three simple steps',
    pricingTitle: 'Pricing',
    pricingSub: 'Choose the right plan for your business',
    popular: 'Most Popular',
    month: 'mo',
    startBtn: 'Get Started',
    ctaTitle: 'Start Today',
    ctaDesc: 'First 14 days free. No credit card needed.',
    formName: 'Your name',
    formPhone: 'Phone number',
    formEmail: 'Email (optional)',
    sendBtn: 'Submit',
    sending: 'Sending...',
    formError: 'An error occurred. Please try again.',
    formSuccess: 'Successfully submitted!',
    formSuccessSub: 'We will contact you within 24 hours.',
    footerDesc: 'Professional CRM system for managing Umrah tours.',
    footerLinks: 'Links',
    footerContact: 'Contact',
    rights: 'All rights reserved.',
  },
}

const t = computed(() => translations[lang.value])

// ─── Navbar scroll ────────────────────────────────────────
const scrolled = ref(false)
const mobileOpen = ref(false)

function handleScroll() {
  scrolled.value = window.scrollY > 40
}

// ─── Nav links (computed from t) ─────────────────────────
const navLinks = computed(() => {
  const uz = ['Asosiy', 'Xizmatlar', 'Tariflar', 'Kontakt']
  const ru = ['Главная', 'Услуги', 'Тарифы', 'Контакт']
  const en = ['Home', 'Services', 'Pricing', 'Contact']
  const labels = lang.value === 'RU' ? ru : lang.value === 'EN' ? en : uz
  return [
    { href: '#',         id: 'top',      label: labels[0] },
    { href: '#features', id: 'features', label: labels[1] },
    { href: '#pricing',  id: 'pricing',  label: labels[2] },
    { href: '#cta',      id: 'cta',      label: labels[3] },
  ]
})

const activeSection = ref('top')


// ─── Carousel ─────────────────────────────────────────────
const carouselSlides = [
  { img: img1, label: 'Boshqaruv paneli' },
  { img: img2, label: 'Tizim ko\'rinishi' },
]
const carouselIndex = ref(0)
let carouselTimer: ReturnType<typeof setInterval> | null = null

function nextSlide() {
  carouselIndex.value = (carouselIndex.value + 1) % carouselSlides.length
}
function prevSlide() {
  carouselIndex.value = (carouselIndex.value - 1 + carouselSlides.length) % carouselSlides.length
}
function goToSlide(i: number) {
  carouselIndex.value = i
}

// ─── Stats counter ────────────────────────────────────────
const statRefs = ref<HTMLElement[]>([])
const stats = [
  { value: 500, suffix: '+', label: computed(() => lang.value === 'UZ' ? 'Faol agentlik' : lang.value === 'RU' ? 'Активных агентств' : 'Active agencies') },
  { value: 12000, suffix: '+', label: computed(() => lang.value === 'UZ' ? 'Ziyoratchi boshqarildi' : lang.value === 'RU' ? 'Паломников управлялось' : 'Pilgrims managed') },
  { value: 98, suffix: '%', label: computed(() => lang.value === 'UZ' ? 'Mijozlar mamnuniyati' : lang.value === 'RU' ? 'Удовлетворённость клиентов' : 'Client satisfaction') },
  { value: 24, suffix: '/7', label: computed(() => lang.value === 'UZ' ? 'Texnik qo\'llab-quvvatlash' : lang.value === 'RU' ? 'Техподдержка' : 'Technical support') },
]

function animateCounter(el: HTMLElement, target: number, suffix: string) {
  const duration = 1800
  const start = performance.now()
  function step(now: number) {
    const elapsed = now - start
    const progress = Math.min(elapsed / duration, 1)
    const ease = 1 - Math.pow(1 - progress, 3)
    el.textContent = Math.floor(ease * target).toLocaleString() + suffix
    if (progress < 1) requestAnimationFrame(step)
  }
  requestAnimationFrame(step)
}

// ─── Features ─────────────────────────────────────────────
const features = computed(() => {
  if (lang.value === 'RU') return [
    { icon: '👥', title: 'База паломников', desc: 'Каждый профиль, документ и история платежей в одном месте.' },
    { icon: '📦', title: 'Управление пакетами', desc: 'Различные пакеты и специальные предложения для клиентов.' },
    { icon: '🏨', title: 'Распределение отелей', desc: 'Номера в Мекке и Медине в режиме реального времени.' },
    { icon: '💳', title: 'Платежи и счета', desc: 'Долги, баланс и платежи в одном месте.' },
    { icon: '📄', title: 'Документы и визы', desc: 'Храните паспорта, визы и документы.' },
    { icon: '📊', title: 'Отчёты и аналитика', desc: 'Подробная статистика по доходам.' },
  ]
  if (lang.value === 'EN') return [
    { icon: '👥', title: 'Pilgrim database', desc: 'Every profile, document, and payment history in one place.' },
    { icon: '📦', title: 'Package management', desc: 'Various packages and special offers for clients.' },
    { icon: '🏨', title: 'Hotel allocation', desc: 'Mecca and Medina rooms in real time.' },
    { icon: '💳', title: 'Payments & accounts', desc: 'Debts, balances and payments in one place.' },
    { icon: '📄', title: 'Documents & visas', desc: 'Store passports, visas, and documents.' },
    { icon: '📊', title: 'Reports & analytics', desc: 'Detailed income and statistics.' },
  ]
  return [
    { icon: '👥', title: 'Ziyoratchilar bazasi', desc: 'Har bir profil, hujjat va to\'lov tarixi bir joyda.' },
    { icon: '📦', title: 'Paket boshqaruvi', desc: 'Turli xil paketlar va maxsus takliflar mijozlar uchun.' },
    { icon: '🏨', title: 'Mehmonxona taqsimoti', desc: 'Makka va Madina xonalari real vaqtda ko\'rsatiladi.' },
    { icon: '💳', title: 'To\'lov va hisoblar', desc: 'Qarz, balans va to\'lovlar bir joyda nazorat qilinadi.' },
    { icon: '📄', title: 'Hujjatlar va vizalar', desc: 'Passport, viza va hujjatlarni xavfsiz saqlang.' },
    { icon: '📊', title: 'Hisobotlar va tahlil', desc: 'Daromad va statistika batafsil taqdim etiladi.' },
  ]
})

// ─── Steps ────────────────────────────────────────────────
const steps = computed(() => {
  if (lang.value === 'RU') return [
    { num: '01', title: 'Зарегистрируйтесь', desc: 'Добавьте ваше агентство за 5 минут без лишних шагов.' },
    { num: '02', title: 'Введите данные', desc: 'Пакеты, паломники и отели — всё настраивается легко.' },
    { num: '03', title: 'Управляйте', desc: 'Автоматические отчёты и контроль в реальном времени.' },
  ]
  if (lang.value === 'EN') return [
    { num: '01', title: 'Register', desc: 'Add your agency in 5 minutes with no extra steps.' },
    { num: '02', title: 'Enter data', desc: 'Packages, pilgrims and hotels — all easily configured.' },
    { num: '03', title: 'Manage', desc: 'Automatic reports and real-time monitoring.' },
  ]
  return [
    { num: '01', title: 'Ro\'yxatdan o\'ting', desc: '5 daqiqada agentligingizni qo\'shing, hech qanday murakkab qadamsiz.' },
    { num: '02', title: 'Ma\'lumot kiriting', desc: 'Paketlar, ziyoratchilar va mehmonxonalarni osongina sozlang.' },
    { num: '03', title: 'Boshqarib boring', desc: 'Avtomatik hisobotlar va real vaqt nazorat.' },
  ]
})

// ─── Pricing ──────────────────────────────────────────────
const pricingPlans = computed(() => {
  const uz = [
    {
      name: 'Starter', price: 19, highlighted: false,
      desc: 'Kichik agentliklar uchun',
      features: ['100 ziyoratchi', '3 paket', 'Asosiy hisobotlar', 'Email qo\'llab-quvvatlash'],
    },
    {
      name: 'Professional', price: 49, highlighted: true,
      desc: 'O\'rta va katta agentliklar uchun',
      features: ['Cheksiz ziyoratchi', 'Cheksiz paket', 'To\'liq hisobotlar', 'Telegram integratsiya', '24/7 qo\'llab-quvvatlash', 'API kirish'],
    },
    {
      name: 'Enterprise', price: 99, highlighted: false,
      desc: 'Katta korporativ agentliklar',
      features: ['Hamma Professional', 'Maxsus integratsiya', 'Shaxsiy menejir', 'SLA kafolat', 'Maxsus o\'quv'],
    },
  ]
  if (lang.value === 'RU') return uz.map((p, i) => ({ ...p, desc: ['Для небольших агентств', 'Для средних и крупных агентств', 'Для крупных корпоративных агентств'][i] }))
  if (lang.value === 'EN') return uz.map((p, i) => ({ ...p, desc: ['For small agencies', 'For medium and large agencies', 'For large corporate agencies'][i] }))
  return uz
})


// ─── Form ─────────────────────────────────────────────────
const BOT_TOKEN = '8435723336:AAGyIaUuzRjQl5o7KdDG1L1F2JzuS-8iU-E'
const CHAT_ID = '2016460881'

const form = ref({ name: '', phone: '', email: '' })
type FormState = 'idle' | 'loading' | 'success' | 'error'
const formState = ref<FormState>('idle')

async function submitForm() {
  formState.value = 'loading'
  const text =
    `🕌 <b>UmraSafar — Yangi Lead!</b>\n\n` +
    `👤 ${form.value.name}\n` +
    `📞 ${form.value.phone}\n` +
    `📧 ${form.value.email || '—'}\n` +
    `🌐 ${lang.value}\n` +
    `🕐 ${new Date().toLocaleString('uz-UZ')}`
  try {
    const res = await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ chat_id: CHAT_ID, text, parse_mode: 'HTML' }),
    })
    if (!res.ok) throw new Error('API error')
    formState.value = 'success'
    form.value = { name: '', phone: '', email: '' }
  } catch {
    formState.value = 'error'
  }
}

// ─── Intersection Observer (reveal + counters) ────────────
function handleClickOutside(e: MouseEvent) {
  const nav = document.querySelector('nav')
  if (nav && !nav.contains(e.target as Node)) {
    mobileOpen.value = false
  }
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true })
  document.addEventListener('click', handleClickOutside)

  // Reveal animation
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed')
        revealObserver.unobserve(entry.target)
      }
    })
  }, { threshold: 0.12 })

  document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el))

  // Counter animation
  const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target as HTMLElement
        const target = Number(el.dataset.target)
        const suffix = el.dataset.suffix ?? ''
        animateCounter(el, target, suffix)
        counterObserver.unobserve(el)
      }
    })
  }, { threshold: 0.5 })

  statRefs.value.forEach(el => { if (el) counterObserver.observe(el) })

  // Carousel autoplay
  carouselTimer = setInterval(nextSlide, 4500)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
  document.removeEventListener('click', handleClickOutside)
  if (carouselTimer) clearInterval(carouselTimer)
})
</script>

<style>
/* ─── Animations ─────────────────────────────────────────── */
@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(24px); }
  to   { opacity: 1; transform: translateY(0); }
}
@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50%       { transform: translateY(-10px); }
}

.animate-fade-up {
  opacity: 0;
  animation: fadeInUp 0.7s ease forwards;
}

/* Scroll reveal */
.reveal {
  opacity: 0;
  transform: translateY(24px);
  transition: opacity 0.6s ease, transform 0.6s ease;
}
.revealed {
  opacity: 1;
  transform: translateY(0);
}

/* Dashboard widget shadow */
.dashboard-widget {
  box-shadow: 0 24px 64px rgba(26, 77, 58, 0.15), 0 4px 16px rgba(0,0,0,0.08);
}

/* Smooth scroll */
html { scroll-behavior: smooth; }
</style>
