"use client";

import { motion } from "framer-motion";
import {
  MessageCircle,
  ShieldCheck,
  Star,
  Heart,
} from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden pt-32 pb-20 flex items-center">

      {/* Background */}

      <div className="absolute inset-0">

        <div
          className="
          absolute
          top-[-200px]
          left-1/2
          -translate-x-1/2
          w-[700px]
          h-[700px]
          rounded-full
          bg-pink-500/20
          blur-[150px]
        "
        />

        <div
          className="
          absolute
          bottom-[-200px]
          right-[-100px]
          w-[500px]
          h-[500px]
          rounded-full
          bg-fuchsia-500/20
          blur-[120px]
        "
        />

      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-5 w-full">

        <div className="max-w-5xl mx-auto text-center">

          {/* Top Badge */}

          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            className="
            inline-flex
            items-center
            gap-2
            px-5
            py-2
            rounded-full
            glass
            border
            border-pink-500/20
            mb-8
          "
          >
            <Star
              size={16}
              className="text-yellow-400"
            />

            <span className="text-sm font-medium">
              Trusted By 5000+ Clients Across UK
            </span>
          </motion.div>

          {/* Headline */}

          <motion.h1
            initial={{
              opacity: 0,
              y: 30,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.6,
            }}
            className="
            text-5xl
            md:text-7xl
            xl:text-8xl
            font-bold
            tracking-tight
            leading-[1.05]
          "
          >
            Reunite With The
            <span className="gradient-text block mt-3">
              One You Truly Love
            </span>
          </motion.h1>

          {/* Subheadline */}

          <motion.p
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.1,
            }}
            className="
            mt-8
            text-lg
            md:text-xl
            opacity-80
            max-w-3xl
            mx-auto
            leading-relaxed
          "
          >
            Acharya Ji has helped thousands
            overcome relationship issues,
            marriage conflicts, breakups and
            emotional challenges through
            trusted spiritual guidance.
          </motion.p>

          {/* CTA */}

          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.2,
            }}
            className="
            mt-10
            flex
            flex-col
            sm:flex-row
            justify-center
            gap-4
          "
          >
            <a
              href="https://wa.me/447000000000"
              target="_blank"
              rel="noreferrer"
              className="
              px-8
              py-4
              rounded-full
              bg-gradient-to-r
              from-pink-500
              to-fuchsia-600
              text-white
              font-semibold
              inline-flex
              items-center
              justify-center
              gap-2
              shadow-xl
              hover:scale-105
              transition-all
            "
            >
              <MessageCircle size={20} />
              WhatsApp Consultation
            </a>

            <a
              href="#testimonials"
              className="
              px-8
              py-4
              rounded-full
              glass
              border
              border-white/10
              font-medium
              hover:scale-105
              transition-all
            "
            >
              View Success Stories
            </a>
          </motion.div>

          {/* Hero Image */}

          <motion.div
            initial={{
              opacity: 0,
              scale: 0.9,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            transition={{
              delay: 0.3,
            }}
            className="
            relative
            mt-20
            flex
            justify-center
          "
          >
            {/* Main Glow */}

            <div
              className="
              absolute
              w-[420px]
              h-[420px]
              rounded-full
              bg-pink-500/30
              blur-[100px]
            "
            />

            {/* Portrait */}

            <div
              className="
              relative
              w-[320px]
              h-[320px]
              md:w-[420px]
              md:h-[420px]
              rounded-full
              overflow-hidden
              border-4
              border-white/10
              shadow-2xl
            "
            >
              <img
                src="/acharya-hero.jpg"
                alt="Acharya Ji"
                className="
                w-full
                h-full
                object-cover
              "
              />
            </div>

            {/* Floating Review */}

            <motion.div
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
              }}
              className="
              hidden
              md:block
              absolute
              left-0
              top-20
              glass
              rounded-2xl
              p-4
              max-w-[250px]
            "
            >
              <div className="flex text-yellow-400">
                ★★★★★
              </div>

              <p className="mt-2 text-sm">
                My relationship was restored
                after months of separation.
              </p>

              <p className="mt-2 text-xs opacity-70">
                Sarah • London
              </p>
            </motion.div>

            {/* Floating Trust */}

            <motion.div
              animate={{
                y: [0, 10, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
              }}
              className="
              hidden
              md:flex
              absolute
              right-0
              bottom-16
              glass
              rounded-2xl
              p-5
              items-center
              gap-3
            "
            >
              <ShieldCheck
                className="text-green-400"
                size={24}
              />

              <div>
                <p className="font-semibold">
                  100% Private
                </p>

                <p className="text-xs opacity-70">
                  Consultation
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Stats */}

          <div
            className="
            mt-16
            grid
            grid-cols-3
            gap-4
            max-w-3xl
            mx-auto
          "
          >
            <div className="glass rounded-2xl p-6">
              <h3 className="text-3xl font-bold gradient-text">
                5000+
              </h3>

              <p className="text-sm opacity-70">
                Happy Clients
              </p>
            </div>

            <div className="glass rounded-2xl p-6">
              <h3 className="text-3xl font-bold gradient-text">
                25+
              </h3>

              <p className="text-sm opacity-70">
                Years Experience
              </p>
            </div>

            <div className="glass rounded-2xl p-6">
              <h3 className="text-3xl font-bold gradient-text">
                98%
              </h3>

              <p className="text-sm opacity-70">
                Satisfaction
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}