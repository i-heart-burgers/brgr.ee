var burgers = [
    [ "Burgers" , "#f00" ],             /* List settings: Name and Colour */
    /* Tallinn, Estonia */
    [ "Boksipeatus"                     , { lat : 59.414279 , lng : 24.757071 } , "http://www.boksipeatus.ee"    , "Veerenni 54, Tallinn" , "Mon-Fri 09:00-20:00<br>Sat 10:00-19:00<br>Sun 11:00-18:00" ],
    [ "Uulits Kadaka tn."               , { lat : 59.411974 , lng : 24.668107 } , "https://www.uulits.ee"        , "Kadaka tee 135A, Tallinn" , "Sun-Thu 12:00-21:00<br>Fri-Sat 12:00-22:00" ],
    [ "Uulits Soo tn."                  , { lat : 59.444944 , lng : 24.742193 } , "https://www.uulits.ee"        , "Soo tn 1B/6, Tallinn" , "Sun-Thu 12:00-22:00<br>Fri-Sat 12:00-23:00" ],
    [ "Balta Uulits"                    , { lat : 59.441012 , lng : 24.73561  } , "https://www.uulits.ee"        , "Kopli 1, Tallinn" , "Mon-Sun 10:00-20:00" ],
    [ "Burger Box"                      , { lat : 59.441325 , lng : 24.736872 } , ""                             , "Kopli 4a, Tallinn" , "" ],
    [ "Tondi Resto"                     , { lat : 59.402697 , lng : 24.715363 } , "http://www.tondiresto.ee"     , "Tammsaare tee 64, Tallinn" , "Mon-Sun 11:00-23:00" ],
    [ "Diner Tallinn"                   , { lat : 59.382697 , lng : 24.70524  } , "http://www.dinerfood.ee"      , "Vabaduse pst 39, Tallinn" , "Mon-Sun 11:00 – 22:00" ],
    [ "Diner Liivalaia"                 , { lat : 59.43052  , lng : 24.758824 } , "http://www.dinerfood.ee"      , "Liivalaia 33, Tallinn" , "Mon-Sun 12:00-23:45" ],
    [ "Estonian Burger Factory"         , { lat : 59.428851 , lng : 24.743929 } , "http://ebf.ee"                , "Pärnu mnt 41a, Tallinn" , "Mon-Sun 12:00-22:00" ],
    [ "Toit's City"                     , { lat : 59.434749 , lng : 24.759792 } , "http://www.toits.ee"          , "Tartu mnt 7, Tallinn" , "Mon-Thu 08:30 – 22:00<br>Fri 08:30 – 22:30<br>Sat 10:00–22:30<br>Sun 10:00–21:00" ],
    [ "Toit's Ülemiste"                 , { lat : 59.422775 , lng : 24.796437 } , "http://www.toits.ee"          , "Suur-Sõjamäe 4, Tallinn" , "Mon-Sun 10:00-21:00" ],
    [ "Mack Bar-B-Que"                  , { lat : 59.429544 , lng : 24.773965 } , "https://www.mackbbq.ee"       , "Tartu mnt 63, Tallinn" , "Mon-Thu 12:00-23:00<br>Fri 12:00-00:00<br>Sat 13:00-00:00<br>Sun 13:00-23:00" ],
    [ "Mack Bar-B-Que Mustamäe"         , { lat : 59.408457 , lng : 24.689267 } , "https://www.mackbbq.ee"       , "Tammsaare tee 104a, Tallinn" , "Mon-Sun 10:00-22:00" ],
    [ "Mack Bar-B-Que Rocca al Mare"    , { lat : 59.426353 , lng : 24.651842 } , "https://www.mackbbq.ee"       , "Paldiski mnt 102, Tallinn" , "Mon-Sun 10:00-21:00" ],
    [ "BabyBack Ribs & BBQ Nautica"     , { lat : 59.440684 , lng : 24.762985 } , "http://www.babyback.ee"       , "Lootsi 7, Tallinn" , "Mon-Sun 11:00-21:00" ],
    [ "BabyBack Ribs & BBQ Ülemiste"    , { lat : 59.422777 , lng : 24.796439 } , "http://www.babyback.ee"       , "Suur-Sõjamäe 4, Tallinn" , "Mon-Sun 10:00-21:00" ],
    [ "BabyBack Ribs & BBQ Pääsküla"    , { lat : 59.369058 , lng : 24.637124 } , "http://www.babyback.ee"       , "Pärnu mnt. 484, Tallinn" , "Sun-Thu 12:00-21:30<br>Fri-Sat 12:00-22:00" ],
    [ "Vesivärava Grill"                , { lat : 59.434155 , lng : 24.780721 } , "http://www.vesivarava.ee"     , "Vesivärava 42, Tallinn" , "Mon-Sun 12:00-21:00" ],
    [ "Bueno Gourmet"                   , { lat : 59.438995 , lng : 24.72834  } , ""                             , "Telliskivi 60a, Tallinn" , "Wed-Thu 12:15-23:00<br>Fri-Sat 12:15-00:30" ],
    [ "Lantsh"                          , { lat : 59.451300 , lng : 24.717170 } , "http://www.lantsh.ee"         , "Erika 14, Tallinn" , "Mon-Sun 11:00-21:00" ],
    [ "Räägupesa"                       , { lat : 59.414963 , lng : 24.719256 } , ""                             , "Nõmme tee 53, Tallinn" , "<b>24H</b>" ],
    [ "Staap"                           , { lat : 59.417494 , lng : 24.720439 } , "http://www.staabiburger.ee"   , "Nõmme tee 34, Tallinn" , "<b>24H</b>" ],
    [ "Dereku Burger"                   , { lat : 59.435243 , lng : 24.769962 } , ""                             , "Fr. R. Faehlmanni 3, Tallinn" , "Mon-Sat 11:30-22:00<br>Sun 11:30-21:00" ],
    [ "Päästke Willy"                   , { lat : 59.440539 , lng : 24.730536 } , "http://willy.ee"              , "Telliskivi 62, Tallinn" , "Mon-Sun 12:00-20:00" ],
    [ "Veska Grill Kiosk"               , { lat : 59.427551 , lng : 24.670239 } , "http://www.veskagrill.ee"     , "Paldiski mnt 133A, Tallinn" , "Mon-Sun 11:00-21:00" ],
    [ "Veska Grill Baar"                , { lat : 59.42779  , lng : 24.628156 } , "http://www.veskagrill.ee"     , "Vana-Rannamõisa Tee 1, Tallinn" , "Mon-Fri 11:00-17:00" ],
    [ "American Burger"                 , { lat : 59.394692 , lng : 24.644733 } , "http://www.americanburger.ee" , "Maepealse 30, Tallinn" , "Mon-Fri 10:00-22:00<br>Sat-Sun 10:00 - 23:00" ],
    [ "Poseidon Burgers"                , { lat : 59.451303 , lng : 24.717169 } , ""                             , "Erika 14, Tallinn" , "Mon-Sun 11:00-21:00" ],
    [ "Burgerito"                       , { lat : 59.431792 , lng : 24.745941 } , ""                             , "Pärnu mnt 19, Tallinn" , "Mon-Sat 09:00-01:00" ],
    [ "R18"                             , { lat : 59.436951 , lng : 24.746013 } , "http://www.r18.ee"            , "Raekoja plats 18, Tallinn" , "Mon-Thu 12:00-20:00<br>Fri-Sat 12:00-21:00<br>Sun 12:00-20:00" ],
    /* Harjumaa, Estonia */
    [ "BabyBack Ribs & BBQ Viimsi"      , { lat : 59.504637 , lng : 24.827317 } , "http://www.babyback.ee"       , "Sõpruse tee 15, Viimsi" , "Sun-Thu 11:00-21:00<br>Fri-Sat 11:00-22:00" ],
    [ "BabyBack Ribs & BBQ Tabasalu"    , { lat : 59.427623 , lng : 24.547527 } , "http://www.babyback.ee"       , "Ranna tee 1, Tabasalu" , "Sun-Thu 12:00-21:30<br>Fri-Sat 12:00-22:30" ],
    [ "Taps"                            , { lat : 59.42935  , lng : 24.551625 } , ""                             , "Klooga Maantee 7a, Tabasalu" , "Sun-Thu 12:00-20:00<br>Fri-Sat 12:00-21:00" ],
    [ "Burger Kitchen"                  , { lat : 59.506379 , lng : 24.830898 } , "http://burgerkitchen.ee"      , "Randvere tee 6, Viimsi" , "Mon-Sun 12:00-21:00" ],
    [ "Caiselle Burks"                  , { lat : 59.182898 , lng : 25.114532 } , ""                             , "Tallinn–Tartu–Võru–Luhamaa maantee, Harjumaa" , "Mon-Sun 07:00-22:00" ],
    /* Tartumaa, Estonia */
    [ "BabyBack Ribs & BBQ Tasku"       , { lat : 58.377673 , lng : 26.730503 } , "https://www.babyback.ee"      , "Turu 2, Tartu" , "Sun-Thu 11:30-21:00<br>Fri-Sat 11:30-22:00" ],
    [ "Sheriff Saloon"                  , { lat : 58.381649 , lng : 26.722241 } , "http://sheriffsaloon.com"     , "Gildi 7, Tartu" , "Mon-Fri 11:00-23:00<br>Sat-Sun 12:00-23:00" ],
    /* Lääne-Virumaa, Estonia */
    [ "BabyBack Ribs & BBQ Rakvere"     , { lat : 59.364114 , lng : 26.339537 } , "https://www.babyback.ee"      , "Haljala tee 4, Rakvere" , "Mon-Sun 11:00-20:00" ],
    /* Pärnumaa, Estonia */
    [ "BabyBack Ribs & BBQ Kaubamajaka" , { lat : 58.370093 , lng : 24.550648 } , "https://www.babyback.ee"      , "Papiniidu 8/10, Pärnu" , "Mon-Sun 10:00-20:00" ],
    [ "Mack Bar-B-Que Beachclub"        , { lat : 58.377239 , lng : 24.497254 } , "https://www.mackbbq.ee"       , "Supeluse 23A, Pärnu" , "Mon-Sun 12:00-00:00" ],
    [ "Pärnu Diner"                     , { lat : 58.363592 , lng : 24.560952 } , "http://www.dinerfood.ee"      , "Riia mnt 110a, Pärnu" , "Mon-Sun 07:00-22:00" ]
];
