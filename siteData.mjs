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
        title: 'machikado cafe | 香里園にあるクレープとコーヒーのお店です',
        description: 'machikado cafeは大阪府寝屋川市香里園アルプラザのフードコート1階にあるこだわりのクレープとコーヒーのお店です。',
        ogpImage: '/assets/images/ogp_default.png',
        type: 'article',
        path: '/info'
    },
    intro: {
        title: 'machikado cafe | 香里園にあるクレープとコーヒーのお店です',
        description: 'machikado cafeは大阪府寝屋川市香里園アルプラザのフードコート1階にあるこだわりのクレープとコーヒーのお店です。',
        ogpImage: '/assets/images/ogp_default.png',
        type: 'article',
        path: '/intro'
    },
    menu: {
        title: 'machikado cafe | 香里園にあるクレープとコーヒーのお店です',
        description: 'machikado cafeは大阪府寝屋川市香里園アルプラザのフードコート1階にあるこだわりのクレープとコーヒーのお店です。',
        ogpImage: '/assets/images/ogp_default.png',
        type: 'article',
        path: '/menu'
    },
    news: {
        title: 'machikado cafe | 香里園にあるクレープとコーヒーのお店です',
        description: 'machikado cafeは大阪府寝屋川市香里園アルプラザのフードコート1階にあるこだわりのクレープとコーヒーのお店です。',
        ogpImage: '/assets/images/ogp_default.png',
        type: 'article',
        path: '/news'
    }
};
