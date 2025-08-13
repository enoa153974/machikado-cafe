/* header、footerの各ナビの
・<a href={siteData.example.path} class={currentPath === '/example' ? 'is-active' : ''}>sample~</a>  と
・page.astroの const currentPath = '/';  の該当ID名を書き換えして使用することで自動的に各ページを判別 + metaデータの自動入力 */

export default {
    home: {
        title: 'machikado cafe | 香里園にあるクレープとコーヒーのお店です',
        description: 'machikado cafeは大阪府寝屋川市香里園アルプラザのフードコート1階にあるこだわりのクレープとコーヒーのお店です。',
        ogpImage: '/assets/images/ogp_default.png',
        type: 'website',
        path: '/'
    },
    info: {
        title: '店舗情報 | machikadocafe',
        description: 'machikado cafeは大阪府寝屋川市香里園アルプラザのフードコート1階にあるこだわりのクレープとコーヒーのお店です。',
        ogpImage: '/assets/images/ogp_default.png',
        type: 'article',
        path: '/info'
    },
        contact: {
            title: 'お問い合わせ | machikado cafe',
            description: 'お問い合わせやご相談は下記フォームからお気軽にどうぞ。',
            ogpImage: '/assets/images/ogp_contact.png',
            type: 'article',
            path: '/info/contact'
        },
    intro: {
        title: 'お店の紹介 | machikadocafe',
        description: 'machikado cafeは大阪府寝屋川市香里園アルプラザのフードコート1階にあるこだわりのクレープとコーヒーのお店です。',
        ogpImage: '/assets/images/ogp_default.png',
        type: 'article',
        path: '/intro'
    },
    menu: {
        title: 'クレープメニュー | machikadocafe',
        description: 'machikado cafeは大阪府寝屋川市香里園アルプラザのフードコート1階にあるこだわりのクレープとコーヒーのお店です。',
        ogpImage: '/assets/images/ogp_default.png',
        type: 'article',
        path: '/menu'
    },
    news: {
        title: 'お知らせ一覧 | machikadocafe',
        description: 'machikado cafeは大阪府寝屋川市香里園アルプラザのフードコート1階にあるこだわりのクレープとコーヒーのお店です。',
        ogpImage: '/assets/images/ogp_default.png',
        type: 'article',
        path: '/news'
    }
};
