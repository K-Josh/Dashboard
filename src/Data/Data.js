// sidebar imports
import {
    UilEstate,
    UilClipboardAlt,
    // UilUsersAlt,
    UilPackage,
    UilChart,
    UilMoneyWithdrawal,
    UilUsdSquare
} from '@iconscout/react-unicons'

import img4 from '/imgs/img4.png'
import img2 from '/imgs/img2.png'
import img5 from '/imgs/img5.png'

export const SidebarData = [
    {
        icon: UilEstate,
        heading: 'Dashboard'
    },
    {
        icon: UilClipboardAlt,
        heading: 'Orders'
    },
    {
        icon: UilPackage,
        heading: 'Products'
    },
    {
        icon: UilEstate,
        heading: 'Dashboard'
    },
    {
        icon: UilChart,
        heading: 'Analytics'
    }
]

export const CardsData = [
    {
      title:'Sales',
      color:{
        backGround: 'linear-gradient(180deg, #0766AD 0%, #0766AD 100%)',
        boxShadow: '0px 10px 20px 0px #0766AD'},
        barValue:80,
        value:'14,280',
        png: UilMoneyWithdrawal,
        series:[
            {
                name:'Revenue',
                data:[10, 100, 50, 70, 80, 30, 40]
            },
        ],
    },
    {
        title:'Revenue',
        color:{
          backGround: 'linear-gradient(180deg, #bb67ff 0%, #c484f3 100%)',
          boxShadow: '0px 10px 20px 0px #e0c6f5'},
          barValue:67,
          value:'25,900',
          png: UilUsdSquare,
          series:[
              {
                  name:'Revenue',
                  data:[31, 40, 28, 51, 42, 109, 100]
              },
          ],
    },
    {
        title:'Expenses',
        color:{
          backGround: 'linear-gradient(rgb(248, 212, 154) -146.42%, rgb(255 202 113) -46.42%)',
          boxShadow: '0px 10px 20px 0px #F9D59B',},
          barValue: 60,
          value:'4,280',
          png: UilClipboardAlt,
          series:[
              {
                  name:'Revenue',
                  data:[10, 25, 30, 12, 15, 20]
              },
          ],
        
    }
]

export const UpdatesData = [
    {
        img:img4,
        name:'Kirin Adeola',
        notification:'has ordered a hoodie.',
        time:'10 minutes ago'
    },
    {
        img:img2,
        name:'Kirin Adeola',
        notification:'has ordered a pizza.',
        time:'10 seconds ago'
    },
    {
        img:img5,
        name:'Kirin Adeola',
        notification:'has ordered five cupcakes.',
        time:'49 minutes ago'
    }
]