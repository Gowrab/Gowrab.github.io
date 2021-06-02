'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "26c6a996525eb38a4152339b1cd42552",
"index.html": "4d605b0bb8d69f1912d7de4d6c063916",
"/": "4d605b0bb8d69f1912d7de4d6c063916",
"main.dart.js": "ee26fd70bcf5cfb67bc288b81214c76e",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "99e8caab9e1f02b213c1843bd3a79eb1",
".git/config": "5cec7d4efc74ca3a5bbae1f526105dc4",
".git/objects/95/41cb50203f6c7b95c13f532c92ec51dffe475d": "2fef504ac4176163c1b8f6ffc962a95e",
".git/objects/95/88d2db5beb57f26126c4b701e9ffd01b2c4a69": "47ff981fe8a41989256dd2dbbaaeb581",
".git/objects/0c/31eb11b8c01bc8139e0db0f002372be3dd86a1": "719fd259b9345ea117f1d4703061e05b",
".git/objects/66/7eb7acd3c0b84f7a854d210c57c63e99de7b8f": "222e31645f868a7b7d9b563f3a488689",
".git/objects/50/15901d6dde728365a4891d72a1ca177ea17a8c": "4d8cfeb100aaa088ceb7b1a9a4ecd7ae",
".git/objects/6a/73f53da2da2ae2490a39832e2633e858358f47": "e1ced33f13c7f785c8c191ade6219aea",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/3c/30bc4d8350fda3852a3cb5190805d1cb2cdf9c": "aad56bc57343fbb1233942288660607f",
".git/objects/51/ecd7bc3db1c2251a26ea63d6ef1a546d0bc9ae": "ce173039e6597e5aaaab59247c7cda2b",
".git/objects/0b/dcb2853a169a64cdcae2c7c4d56c5d1191a2bb": "6a4dee4d353890ebecd5b0771fc7bc3d",
".git/objects/93/16bb554b8704954b13598e2195e9a37699262e": "b0779aff890def4c7856a44b5a53aa08",
".git/objects/93/2df4ae2c3cb34a716e21b478590eecaa2ae295": "e299ba2e68d97d0f661cc8ddccf9787a",
".git/objects/9d/b40d695ecb4a8e1a8a411825579c92d2e2422d": "7860220f00e243aebe072b18f729cb96",
".git/objects/b2/3a855e9b45c0626a4f86806ee4eca0dce1142c": "79ecba5ae7b9a60a3a4388822b795528",
".git/objects/ad/2f90b78480aeb6608226d9db4ecbd3ec06aaeb": "4add97a99941aa0e9eed0f2173416ade",
".git/objects/df/079f8a0bd5321ce69466ec05f9af7e4c4c94ce": "90a198e348961a818b450106c94823fe",
".git/objects/b4/c6cc4e08b6e291b3ddc052ff3d084fc415f29b": "c413809d1595dad2483999dce183959a",
".git/objects/b4/d6357468299ac35e9e9ac37d2a83265c773dc2": "9399d8c52a5798e5f72674eca17fc3d8",
".git/objects/a5/8039f3c1a0feccce2f1700ae2e840bb7a54edd": "e931d766b5d01877a06b009df1e1e905",
".git/objects/bd/36b9f5f174c317a53e00955ca01d5f3a104b54": "e9693f449c8b4691b0c7c05363aced70",
".git/objects/ae/53b3cef60ab63f1f155f2b37bc15157c50c930": "9604100e70f23e7f372819965b8854b2",
".git/objects/ab/42919f85603944b50dc177fafd0f15e5bdb927": "7f74a06c3364576a6c8152001da95379",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/f4/f6f2267009ab92fec5ddcdd2693606d2adf5e3": "89c2158e952e171ec11427910d15049f",
".git/objects/f3/080d21892c71d681dc7b3aa2a0bac52b9c483f": "d3dbdbd1f4f2b1f541f7660569eb41a2",
".git/objects/eb/0d48dc1ead9f6fb8ef2925d73868267aaa52f9": "36e2730520e22db0adde717a8895b298",
".git/objects/c7/27592f62077c02866264e8d8896829a84d062c": "4e6ba117a39aeb499f07c5bf1323fc43",
".git/objects/fd/24c2a4a5f1973f2b27f4d4997795d222b155c3": "a8e13aaf067c15b34050900a26da773b",
".git/objects/ca/a0b52d2777ed8f77f7b7a939d7fdbc108ba62d": "dde4b8e04918fe042f553d567d3a726a",
".git/objects/e4/f828a1aa97e89a24bce05bbfe59688a5282a10": "9206b9cbd531e03a75572e5e29bbc007",
".git/objects/e4/37a89f546c87da7d7be19d0ce6ad58359081df": "e96469481e18b18eb18d8d209dfa1693",
".git/objects/fe/a9b3d41cd1231ae775198e80f03d6bc740175b": "83c93caf1423df3d83ee7626532e287c",
".git/objects/c8/1028c1a7af1550d01681a909c573f7a7830278": "4e4220cf5e9d973e432b0a06119c9e39",
".git/objects/c6/cd86daf3c06b5b3e1828a02035a3883e36061d": "2b61a05662cb79204987269e91ebd75b",
".git/objects/4e/d5092a056a2e14103d1961356c50443f7ba0f6": "caad86eee612918b92b3c6905f9f023f",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/27/452406ffe79c5ebcc9ea120abede50c9355942": "58fbbd55eb3bdb9a5dedb5e26a024142",
".git/objects/27/18332d6ff635616902765607657b6a66d60d6c": "37e6620bd2e20d09986fa53bf128ae11",
".git/objects/4b/d1bc024f0358e16f6d22810da4fc54955ecf7b": "bf0012dcef9e6739a89546fb2154b120",
".git/objects/4b/6aae8f66267bcfb61b954b41bdc6e68a3b32a3": "674eba111e7e74f7635e42814fcaba92",
".git/objects/4b/825dc642cb6eb9a060e54bf8d69288fbee4904": "75589287973d2772c2fc69d664e10822",
".git/objects/29/51660c13588c3f7d571db2ec28596b0068262d": "3763bc527de57a48fefbe7afd24be230",
".git/objects/16/80274e8b512ace3149c59e5c2dcf4cb6cc0f73": "a9f7506f3193e0fcbd1637579afcffaa",
".git/objects/89/2fc0f4bfbe81281c42973ec830fc37a9907ae1": "0ad9be438084b6809c36fa208f315f16",
".git/objects/1f/dc335edc27dc59770700a1699b6a8013b55459": "9c51aea23328a403acf9250e06fd4fcb",
".git/objects/87/9d45e1efe7fd68e238dce57b642f6b474113ad": "cd9288bd5862d1993ca1249921769faa",
".git/objects/17/7a95446dde29e139ce4a8875063959f03ed884": "9d0d7da369a9466d1938f85ee2481aac",
".git/objects/8f/3089b598590d6f7851b177cb20f0f6a8504da6": "ffc85089a7417288083e88cfda2a65b6",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/7e/237a5d20c0819a74004054d80ff752e4778ddb": "3d61ce2491d7529b74b6aae3dade6db1",
".git/objects/4c/25f85e9209f46e5534a86078427f61d7eb87ba": "bd63193769c3a1a20b73698adf03b99f",
".git/objects/4c/57a4c8755373a911bfc4296483ed3f137dca6a": "adb5cff767672600c9b821d24845bf97",
".git/objects/81/adad368b5e38161e41679be5110241958f9e1a": "d54e017a71bbef7f3c61957481483dc7",
".git/objects/72/19fd37895e7b00df3d32bfcf81a3dca2a7d99e": "a6e3851d1b297d3f025b60a4bf6c8c56",
".git/objects/43/46e2d9e671bf7a5a3287a3ddacf5f915a35d4f": "41b3d0d418188d18de1ec7daf79f5299",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/07/1abd020e0839096325401e30f338df509deb17": "51eaa0fd966b1fc0643af302ca2a59c3",
".git/objects/38/9c64474c22e34cd8969534cb8d530ff66b0068": "d0366592e18a23b5979cd65b1ee81fa2",
".git/objects/9a/6e4862304ec3e28a8b3d8811b718d594549793": "c12626d9f12efd1d0c982ab160a22a69",
".git/objects/36/4e559f8d1d8496802301eae8875e544001dbe6": "3a8840c38563863ba8ecf36f29030b6e",
".git/objects/3a/3386065a81d08119b9be900517654204a021c5": "b222db001a0d4181656115b85d9b9217",
".git/objects/54/46ddb91860e607eb7a435bf5c06ddc45da6218": "8950533385443d6bf8c2617f59548b39",
".git/objects/98/0148ffc78c4e671bd00f1d65fe55e925ce6d66": "76566c0106939475a43f258bd7df8b4e",
".git/objects/30/bc954256ecfa62c8d90cba5d6ce202d499e450": "330ed4d45ab2a38324d00f581210051a",
".git/objects/30/68a152b48f2d5297e86905e90c07b87e4db4c2": "f3580710f5ae8efcfb3f9c84a711b798",
".git/objects/5e/4588612875d44746351d64884c8f3eb481a10b": "6182fd7712334ad3bf10663ebbcfcb65",
".git/objects/06/c915e093ccacd94544c19dca9d74e1a42c1443": "5740f243f5a7632a5f122d4df159d719",
".git/objects/6c/198e114e4ae53e534a0c346952cb3bee2cf0b7": "af27da8fce7db8f75557760ebcbaa63f",
".git/objects/39/c370af0a62796b61d1c2b946176b9bec5c9781": "b3500cbb079765a3372b6726e24a8239",
".git/objects/64/1fbabe98b8ad815ad4ab6e730fe8aced2aef3d": "b5cd9105600aad24c839e609aeeb5c06",
".git/objects/d4/88cb4ee2031e6ee9f9b0c5674c20df2ca41138": "93d85166cd134fcdef3d0d8f4f1545f7",
".git/objects/ba/74505741994bdcb743e165554d2ddc26a101bc": "43f46cb54f4c3e72180511ec8ef27af9",
".git/objects/a0/8bdc3a1ae2f4a42e74fbd2fe1dd09c9b34423f": "39d65d08686698751b3ffe27941a58bc",
".git/objects/b8/f2e381ae4ee049dbd61a16316138eec8d187f6": "2ae54adda84fe3e6ea65519f009db2bd",
".git/objects/dd/43db65edcbfd810943d4270e20d3703447c26d": "b41f2c4cbaf5f3425cc1445d4e1e098e",
".git/objects/b6/a28389fc3ee5bf98e75a52072d218cf1476063": "f302c75a454a8fd247fcc769eda8426a",
".git/objects/a9/91f51138ffe059d588003dc7936aff059a0428": "b73a35563fa129bd884d8b5c53ee9231",
".git/objects/b7/7ab67de71b8a52dabc83595350a4dbe846bb70": "0d705599fb582a5db62dd8f05f67587b",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/db/aca769e4d771f23e752f4d1ea6252e0c573048": "80aa2efce720522f594987eedf0164b1",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/b0/f751aebf9b5a6ad70a445fd9979d8fea711aad": "b23831329b13e2e3ff0b1f5ddd24a766",
".git/objects/b9/c9aa50339d82ed4d05a8ce708ba020bd0b0ae6": "28c788f6aed78b5754fbdb8848652d4e",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/cc/fab74c1f56c330985060e2247607eaedb3c7d7": "ad5b6117df489509af208438785f208b",
".git/objects/c5/191e28e022840cc11dff9274f7a83586b2f9d6": "76b716a8bc4cc2edf063f76b5e3f96cb",
".git/objects/c2/a728121cc94290e0e8dbde82b1e5125d5465a6": "f2989bf1405fb660305820683b8ee53c",
".git/objects/f6/5a6710d36be40250d51bc8de2515745769f69b": "309d31f980d5a22442d5f0b8f84327f2",
".git/objects/cb/c748a430a5a52d961d44df9ec31dedcf30a014": "15866a54d9255f3676e18fae8a715806",
".git/objects/e0/3ff4a554b57d98e58603887a7ded7452f9e00b": "4a99ca3f1c96888f50884a40f791bdcd",
".git/objects/79/7e0e009c0b715e8585ee38f88b74109f692b99": "acdd4a7f99f61da51ad8905aa05fdc17",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/83/b9ce9028380e3720aecf0427d89fda9274aaef": "6bbd2e43004e3dfcf155a81ae4f89a70",
".git/objects/70/1015d85e65aa81e786e34773856f63d0e2a7a2": "0794e7025fffbaaa9764b7efbe79f66b",
".git/objects/4a/ef201286dbfe93f08736b075ca0aa2df872933": "6a887aa26fc039a44939b5dfd3c95f0c",
".git/objects/12/5550204f97fe1c2ae5397d0eab621ca79d9319": "2346ae8ac22f5ee2cf565e05c791b959",
".git/objects/1c/eceffbe802a54995a10457f20c40ecb3e52e32": "0bdab165d343bd3ca392b9ff956acdf6",
".git/objects/49/133379e7f803c60e4360a97bb3b2fcc041475c": "baa6f01df91de3b5ac0ab28b72385653",
".git/objects/40/e93fb595fa2b96c02a8f85f61391a4683bcb32": "37254ac9253dc6fc09383fdfb0456141",
".git/objects/2e/13d811102d21856c1508c0af6e3385f0bbcaf0": "d8924170a9fc8295be3ef5b5421862bf",
".git/objects/78/a01c4372a54543eb35ee0b0cf2c82e62e3869f": "c62e603bc5052d891b6bf2f9c1127a8c",
".git/objects/7f/cd9577a13274800aa29ed833fb15662f906332": "eef99e33da50ceefdb5dd428ab3282a0",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/info/exclude": "0aebccfd5866bfc3e7c8f625230c22f7",
".git/logs/HEAD": "cd7afc7e2bf9378dd59d0707cf197f2d",
".git/logs/refs/heads/master": "cd7afc7e2bf9378dd59d0707cf197f2d",
".git/logs/refs/remotes/origin/master": "0e9c6bbd1d0300666033059cebda9dec",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "e4db8c12ee125a8a085907b757359ef0",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "ecbb0cb5ffb7d773cd5b2407b210cc3b",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/update.sample": "517f14b9239689dff8bda3022ebd9004",
".git/refs/heads/master": "85a15fc407014b43292e9136e482c076",
".git/refs/remotes/origin/master": "85a15fc407014b43292e9136e482c076",
".git/index": "2eabd4843f68bf86312be18dda1238d7",
".git/COMMIT_EDITMSG": "a8297d555dd34879e8e48e1cf12acefa",
"assets/AssetManifest.json": "b577958e16ea2c8b1848f7313c0537de",
"assets/NOTICES": "c0c713772efe857e6f5eda63c73c6bb9",
"assets/FontManifest.json": "6ccaabaf59ae0bb80d739cd165c72b58",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "dffd9504fcb1894620fa41c700172994",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "4b6a9b7c20913279a3ad3dd9c96e155b",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "00bb2b684be61e89d1bc7d75dee30b58",
"assets/packages/wakelock_web/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/assets/chat1.png": "25bc749f77370d0c57cc6b7680bb6306",
"assets/assets/add_new_property.png": "6f26738a71a310bb7df0ee051dd0a9c6",
"assets/assets/preferred_contractors.png": "f744b9ea44fa90edb9568a7555561123",
"assets/assets/chat2.png": "4c4d3ed2ea0018df724d35c53ec15550",
"assets/assets/tenants_logo.png": "b93061d4e998344316c6d01094eccd3e",
"assets/assets/chat_actv.png": "c596e1d88da8262b647f670fed62391d",
"assets/assets/skip_text_boxed.png": "829387ed324a063758498a36b249667c",
"assets/assets/chat3.png": "c1b23f9273f6ed3b39591b12d64b55f4",
"assets/assets/search_icon.svg": "2be9e715baaec6be593ec0be74987cc8",
"assets/assets/my_properties.png": "5c7bd72534d2956da7722756b55b4ce4",
"assets/assets/menu_icon.png": "393cf528da0fca0bda728a79217a376c",
"assets/assets/credit_history.png": "7fd1c0d1baf2fe3ec2d3be93240c356c",
"assets/assets/person_inactv.png": "dda15a578a4beae0f6301ae324297faf",
"assets/assets/house_icon.svg": "912e396204ccc077c33dffa747b96462",
"assets/assets/chat6.png": "7f0834980de42ce276f79801976a4e38",
"assets/assets/chat4.png": "33b56cb879e882e7b4cef77ff98d7d20",
"assets/assets/job_history.png": "04e33f133120ba21534c071329478bca",
"assets/assets/chat_inactv.png": "8153d08c3da4b47749cb07e719ee2e0e",
"assets/assets/financials.png": "84aef9dce03a6e1581dc71006b0b5315",
"assets/assets/goback_icon.png": "df61b302489adf7429857047048cc0cb",
"assets/assets/search_actv.png": "8e94c24ce568bbf91cb9c2fa2e5daae9",
"assets/assets/sort_icon.svg": "548e481352130fa4293e704caa0ebe57",
"assets/assets/chat5.png": "eb4ebc9145598c9a9cf8f2f3af7aafed",
"assets/assets/tenant_inverted.png": "05643cdbd0bc9b0f321c44fc41454c0f",
"assets/assets/sort_icon.png": "2cbb96de71899decb13d61a463d4b2c6",
"assets/assets/fav_image1.jpeg": "1c95edb3c00247ef02f7c29121bd299e",
"assets/assets/tenant_logo_inverted.png": "d3afe15d62611139f7182265dce40adb",
"assets/assets/back_arrow.png": "1c0b497e46aa224c18f197f4993f2c2d",
"assets/assets/tenant_home_logo.png": "d4b49839d694427ba16d84f0dfe948b5",
"assets/assets/tenants_name.png": "6095f40b5b3d17920e18df69813972c6",
"assets/assets/current_rent.png": "a550f8b368fc2d166ff819ee6ac1d9eb",
"assets/assets/map_icon.svg": "2b7a24f7bede015d99a6243790ba467c",
"assets/assets/bedroom.svg": "223df52648d1fd8b0cd4606ef76ae367",
"assets/assets/rental_applications.png": "83d334902b6880efb8b988538dd5d42d",
"assets/assets/search_contractors.png": "e5573db3f88304bbc87df0f8c4745e30",
"assets/assets/search_icon.png": "f498ceda4e4e223fdc45034264a35029",
"assets/assets/like_actv.png": "be62799c5a08737f3bd73a833e8e5df0",
"assets/assets/assigned_jobs.png": "b756891a69e86489c0239615494a4780",
"assets/assets/house.jpeg": "1c95edb3c00247ef02f7c29121bd299e",
"assets/assets/right_button.png": "65515bf3a12b78bdd892dedd4b118c8f",
"assets/assets/active_love.png": "c1d06ac4ff2d43abfa8be0dbf9c00ae3",
"assets/assets/fav_image3.jpeg": "a4a8a239ef546216967b4c2d676f529b",
"assets/assets/schedule_appointment.png": "565df0908fd835e71771571b282570cb",
"assets/assets/search_inactv.png": "f498ceda4e4e223fdc45034264a35029",
"assets/assets/tenant_history.png": "f2e7371b2dbdf0f5b3c7b143251ebcf3",
"assets/assets/logo.png": "f9a2e51ca5738c6708e83100c47b23d3",
"assets/assets/apartment.jpeg": "d0eb7dd3101ba5bd8e268ee2ec695a26",
"assets/assets/person_actv.png": "cdd32e46cc480d29feb22b6d4b047da2",
"assets/assets/fav_image2.jpeg": "c9dc51529ca1163218ef20a1ebd642ca",
"assets/assets/like_inactv.png": "6dd471da4d02924fb00659ded31abcb7",
"assets/assets/filter_icon.svg": "0d267d22f005a23be88482d63f6f5cc3",
"assets/assets/fav_image5.jpeg": "81ddbc1dd969ee2623c47728385d45d7",
"assets/assets/more.png": "0d3c2bbe0c61f0c9cf75cb495358ba3a",
"assets/assets/offered_services.png": "f744b9ea44fa90edb9568a7555561123",
"assets/assets/fonts/Omnes-Regular.otf": "fa69561dacaa0383dfedf1a0e3a7e959",
"assets/assets/fonts/JosefinSans_Italic_VariableFont_wght.ttf": "fd0ed435ec08aae4c87867bf3068762d",
"assets/assets/fonts/Futura-Medium.otf": "1ae74371cfc0ed9d96229945ece4733d",
"assets/assets/fonts/SchemeRg-Regular.ttf": "54cb3a691e88a5300b591f4fe46c8e9c",
"assets/assets/fonts/JosefinSans_VariableFont_wght.ttf": "324a513cb9c683dc30777bdbccf59995",
"assets/assets/login_user.png": "3adfcd53f4392aa1404f47326e715e43",
"assets/assets/love_active.svg": "ce6ffbbc66f7f98311603b2c906fd3c7",
"assets/assets/feedback.png": "ce2dff5411cb0b1847b8cfc1a28db5d2",
"assets/assets/area_icon.svg": "4fe9613a4280518497a7f42e3253f543",
"assets/assets/current_tenants.png": "ed06468c16df983c4854d5ac67490cfe",
"assets/assets/fav_image4.jpeg": "ee408b7f06992d1be356dec787d084da",
"assets/assets/setting.png": "06f2ce99f298268bc70f5d0d8c30ba1b",
"assets/assets/loading_image.jpeg": "1c3ca6fae5eaf5039a24b7a7265d53c4",
"assets/assets/edit_pen.png": "bd69b0994f72ec02a9420a2ae261bff6"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
