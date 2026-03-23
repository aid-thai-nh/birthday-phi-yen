import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Heart,
  Sparkles,
  Gift,
  Star,
  CalendarHeart,
  ArrowDown,
  Stethoscope,
  BookOpen,
  FlaskConical,
} from "lucide-react";
import { FloatingBackground } from "@/components/FloatingBackground";
import { AudioPlayer } from "@/components/AudioPlayer";

const WISHES = [
  {
    title: "Luôn Mỉm Cười",
    content:
      "Nụ cười của dợ là ánh nắng dịu dàng nhất soi sáng cuộc đời anh. Hãy luôn giữ nụ cười rạng rỡ ấy trên môi nhé, vì dợ cười là lúc dợ xinh đẹp nhất.",
    icon: Sparkles,
  },
  {
    title: "Bình An & Hạnh Phúc",
    content:
      "Tuổi mới, anh mong mọi bão giông sẽ dừng lại sau cánh cửa. Mong dợ luôn có những ngày tháng bình yên, nhẹ nhàng và ngập tràn tình yêu thương.",
    icon: Heart,
  },
  {
    title: "Thành Công Trong Y Khoa",
    content:
      "Chúc cô bác sĩ tương lai của anh luôn vững bước trên con đường y khoa đầy gian truân nhưng cũng thật cao quý. Hãy nhớ rằng mỗi bài học hôm nay là một sinh mệnh được cứu ngày mai.",
    icon: Stethoscope,
  },
  {
    title: "Vượt Qua Mọi Kỳ Thi",
    content:
      "Đại học y khoa không dễ dàng, nhưng anh tin dợ có đủ trí tuệ và nghị lực để vượt qua tất cả. Chúc dợ học giỏi, điểm cao, và luôn tìm thấy niềm vui trong từng trang sách!",
    icon: BookOpen,
  },
  {
    title: "Niềm Đam Mê Y Học",
    content:
      "Chúc dợ mãi giữ ngọn lửa đam mê với y học — cái đam mê đã dẫn dợ đến đây. Dù có những ngày mệt mỏi, hãy nhớ lý do dợ bắt đầu và tiếp tục tiến lên nhé!",
    icon: FlaskConical,
  },
  {
    title: "Bên Nhau Mãi Mãi",
    content:
      "Dù là sinh nhật năm nay, năm sau, hay nhiều năm về sau nữa... anh vẫn luôn muốn là người đầu tiên nói lời chúc mừng sinh nhật dợ.",
    icon: Gift,
  },
  {
    title: "Sức Khỏe Dồi Dào",
    content:
      "Người chữa bệnh cho người khác cũng cần phải tự chăm sóc bản thân. Chúc dợ luôn khỏe mạnh, ngủ đủ giấc (dù học y thì khó lắm!), và luôn tràn đầy năng lượng mỗi ngày.",
    icon: Star,
  },
  {
    title: "Ước Mơ Trọn Vẹn",
    content:
      "Chúc dợ hiện thực hóa mọi ước mơ mà dợ ấp ủ. Một ngày nào đó khoác lên mình chiếc áo blouse trắng, đứng trong bệnh viện và cứu người — anh tin dợ làm được điều đó!",
    icon: CalendarHeart,
  },
];

export default function Home() {
  const [openedEnvelope, setOpenedEnvelope] = useState(false);

  return (
    <div className="min-h-screen w-full relative selection:bg-pink-200">
      <FloatingBackground />
      <AudioPlayer />

      {/* HEADER / HERO SECTION */}
      <section className="relative min-h-[90vh] flex flex-col items-center justify-center pt-20 pb-10 px-4 z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="text-center max-w-4xl mx-auto"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.5, type: "spring", stiffness: 100 }}
            className="flex justify-center mb-6"
          >
            <span className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-pink-100 text-primary shadow-inner shadow-pink-200">
              <Heart className="w-10 h-10 fill-primary animate-pulse" />
            </span>
          </motion.div>

          <h2 className="font-script text-4xl md:text-5xl lg:text-6xl text-pink-500 mb-4">
            Happy Birthday
          </h2>
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-600 via-pink-400 to-rose-400 mb-4 drop-shadow-sm pb-2">
            Chúc Mừng Sinh Nhật
            <br />
            Dợ Iu!
          </h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
            className="font-script text-3xl md:text-4xl text-pink-400 mb-4"
          >
            Thượng Thị Phi Yến
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="inline-flex items-center gap-2 bg-white/60 backdrop-blur-sm px-6 py-2 rounded-full border border-pink-200 text-pink-600 font-semibold mb-6"
          >
            <CalendarHeart className="w-5 h-5" />
            <span>01 / 04 / 2004</span>
          </motion.div>
          <p className="font-sans text-lg md:text-xl text-pink-800/70 max-w-2xl mx-auto leading-relaxed">
            Hôm nay là một ngày vô cùng đặc biệt, ngày mà một thiên thần đã
            giáng trần để mang đến cho anh những điều ngọt ngào nhất trong cuộc
            đời.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-10 animate-bounce text-pink-300"
        >
          <ArrowDown className="w-8 h-8" />
        </motion.div>
      </section>

      {/* ROMANTIC MESSAGE SECTION */}
      <section className="relative py-20 px-4 z-10">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">
            {/* Image Side */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1 }}
              className="w-full md:w-1/2 relative"
            >
              <div className="relative aspect-square rounded-[2rem] overflow-hidden shadow-2xl shadow-pink-500/20 ring-1 ring-white">
                {/* <img
                  src={`${import.meta.env.BASE_URL}images/phi-yen.jpg`}
                  alt="Phi Yến"
                  className="w-full h-full object-cover"
                /> */}
                <div className="absolute inset-0 bg-gradient-to-tr from-pink-500/20 to-transparent mix-blend-overlay"></div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-white rounded-2xl shadow-xl flex items-center justify-center rotate-12">
                <CalendarHeart className="w-12 h-12 text-primary" />
              </div>
              <div className="absolute -top-6 -left-6 w-16 h-16 bg-pink-100 rounded-full shadow-lg flex items-center justify-center -rotate-12">
                <Sparkles className="w-8 h-8 text-pink-500" />
              </div>
            </motion.div>

            {/* Letter Side */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1 }}
              className="w-full md:w-1/2"
            >
              {!openedEnvelope ? (
                <div
                  className="glass-card rounded-[2rem] p-10 text-center cursor-pointer hover:scale-[1.02] transition-transform duration-300"
                  onClick={() => setOpenedEnvelope(true)}
                >
                  <div className="w-24 h-24 mx-auto bg-pink-50 rounded-full flex items-center justify-center mb-6 shadow-inner">
                    <Heart className="w-12 h-12 text-primary fill-primary/20" />
                  </div>
                  <h3 className="font-display text-3xl font-bold text-foreground mb-4">
                    Anh có một bức thư nhỏ gửi dợ...
                  </h3>
                  <p className="text-muted-foreground mb-8">
                    Nhấn vào đây để mở nhé công chúa Phi Yến
                  </p>
                  <button className="px-8 py-3 rounded-full bg-gradient-to-r from-primary to-pink-400 text-white font-semibold shadow-lg shadow-pink-500/30 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                    Mở Thư
                  </button>
                </div>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9, rotateY: 90 }}
                  animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                  transition={{ duration: 0.8 }}
                  className="glass-card rounded-[2rem] p-8 md:p-12 relative"
                >
                  <div className="absolute top-4 left-4 text-4xl text-pink-200 font-serif">
                    "
                  </div>
                  <div className="relative z-10">
                    <h3 className="font-script text-4xl text-primary mb-6">
                      Gửi Phi Yến, dợ iu của anh
                    </h3>
                    <div className="space-y-4 font-sans text-lg text-foreground/80 leading-relaxed">
                      <p>
                        Hôm nay là sinh nhật của dợ — ngày 01 tháng 04, ngày mà
                        một cô gái đặc biệt chào đời và sau này bước vào cuộc
                        đời anh. Anh muốn gửi đến dợ những lời chúc ngọt ngào
                        nhất, những cái ôm ấm áp nhất và trọn vẹn tình yêu của
                        anh.
                      </p>
                      <p>
                        Anh tự hào về dợ lắm — một sinh viên Đại Học Y tài giỏi,
                        đang ngày đêm học hành chăm chỉ để trở thành bác sĩ
                        trong tương lai. Con đường đó không dễ, nhưng dợ luôn
                        tiến về phía trước. Điều đó khiến anh yêu dợ nhiều hơn
                        mỗi ngày.
                      </p>
                      <p>
                        Tuổi mới, hãy cứ làm những điều dợ thích, theo đuổi
                        những ước mơ dợ ấp ủ. Dù thế nào, anh hứa sẽ luôn ở đây,
                        nắm chặt tay dợ và đi cùng dợ trên mọi chặng đường.
                      </p>
                    </div>
                    <div className="mt-8 pt-6 border-t border-pink-100 flex items-center justify-between">
                      <p className="font-script text-3xl text-pink-500">
                        Thương dợ thật nhiều ❤️
                      </p>
                      <Heart className="w-8 h-8 text-primary fill-primary animate-pulse" />
                    </div>
                  </div>
                  <div className="absolute bottom-4 right-8 text-6xl text-pink-100 font-serif opacity-50">
                    "
                  </div>
                </motion.div>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* WISHES GRID */}
      <section className="relative py-20 px-4 bg-white/40 z-10">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-script text-4xl text-pink-500 mb-2">
              Những Điều Ước
            </h2>
            <h3 className="font-display text-4xl font-bold text-foreground">
              Dành Riêng Cho Phi Yến
            </h3>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {WISHES.map((wish, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-3xl p-8 shadow-xl shadow-pink-900/5 hover:shadow-2xl hover:shadow-pink-500/10 hover:-translate-y-2 transition-all duration-300 border border-pink-50 group"
              >
                <div className="w-16 h-16 rounded-2xl bg-pink-50 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white text-primary transition-colors duration-300">
                  <wish.icon className="w-8 h-8" />
                </div>
                <h4 className="font-display text-xl font-bold text-foreground mb-3">
                  {wish.title}
                </h4>
                <p className="text-muted-foreground leading-relaxed">
                  {wish.content}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SPECIAL DATE / STATS SECTION */}
      <section className="relative py-20 px-4 z-10 overflow-hidden">
        {/* <img 
          src={`${import.meta.env.BASE_URL}images/floral-frame.png`} 
          alt="Floral decoration" 
          className="absolute inset-0 w-full h-full object-cover opacity-30 pointer-events-none mix-blend-multiply"
        /> */}

        <div className="max-w-4xl mx-auto relative z-10 glass-card rounded-[3rem] p-12 text-center border-2 border-white">
          <Heart className="w-16 h-16 text-primary fill-primary mx-auto mb-4 animate-bounce" />
          <p className="font-script text-2xl text-pink-400 mb-2">
            Thượng Thị Phi Yến
          </p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-12">
            Hành Trình Của Chúng Ta
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "∞", label: "Yêu Thương" },
              { value: "100%", label: "Tin Tưởng" },
              { value: "Vô số", label: "Nụ Cười" },
              { value: "1", label: "Trái Tim" },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ scale: 0.5, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, type: "spring", stiffness: 100 }}
                className="flex flex-col items-center"
              >
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                  {stat.value}
                </div>
                <div className="text-lg text-pink-800 font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="relative py-12 text-center z-10 bg-white/60 backdrop-blur-sm border-t border-white/50">
        <div className="flex justify-center items-center gap-2 mb-4">
          <Heart className="w-5 h-5 text-primary fill-primary" />
          <Heart className="w-6 h-6 text-pink-400 fill-pink-400" />
          <Heart className="w-5 h-5 text-primary fill-primary" />
        </div>
        <p className="font-script text-3xl text-pink-600 mb-2">
          Chúc Phi Yến tuổi mới thật rực rỡ!
        </p>
        <p className="text-sm text-pink-500/80 font-semibold mb-1">
          01 / 04 / 2004 🩺
        </p>
        <p className="text-sm text-pink-400/80 uppercase tracking-widest font-bold">
          Made with all my love
        </p>
      </footer>
    </div>
  );
}
