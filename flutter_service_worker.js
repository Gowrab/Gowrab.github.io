'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "26c6a996525eb38a4152339b1cd42552",
"index.html": "9a8e0ecebe5b11a6434b92e3e8dce0b2",
"/": "9a8e0ecebe5b11a6434b92e3e8dce0b2",
"main.dart.js": "ee26fd70bcf5cfb67bc288b81214c76e",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "99e8caab9e1f02b213c1843bd3a79eb1",
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
