import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function AOSInit() {
    useEffect(() => {
        AOS.init({
            once: true,
            duration: 600,
            // offset: 120,  // 必要なら調整
            // easing: 'ease-out',
        });

        // 画像や外部CSS反映後にリフレッシュ
        const onLoad = () => AOS.refreshHard();
        window.addEventListener('load', onLoad);

        // 万一フォントや画像でレイアウトが動いたときの保険（少し遅延して再計算）
        const t1 = setTimeout(() => AOS.refresh(), 300);
        const t2 = setTimeout(() => AOS.refresh(), 1000);

        return () => {
            window.removeEventListener('load', onLoad);
            clearTimeout(t1);
            clearTimeout(t2);
        };
    }, []);

    return null; // 表示するUIはないからnullでOK
}