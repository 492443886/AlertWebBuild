'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "e472cdd6355b6ae710e7a380e4fd8fcd",
".git/config": "da1648eef60b167300e76bb7b3a3243f",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/update.sample": "7bf1fcc5f411e5ad68c59b68661660ed",
".git/index": "181c83cbfb89b236133792d42872c90a",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "9b65b533c56671369bd588d57d295d12",
".git/logs/refs/heads/main": "f0fc70081e55ae58bde2d557c9fa0aae",
".git/logs/refs/remotes/origin/main": "ef7a3e1dfd9df4ef192659fafcc11134",
".git/objects/00/60c1eab485c45ca33a84324c050cfb972dc75f": "514cddf0c9b5d519546f3bf00815b0f8",
".git/objects/02/204912b832e6be9439c4861e46d993c61030f3": "a45c111d74f02a0f3501e75c480867cc",
".git/objects/10/70aacda9489240308493094defb23ce0d1bedc": "f471f76fbc5a741c3ee62d32e23609b3",
".git/objects/18/6b6a4a9dfa306ecb7dcb2b0cc67326f3ca65f5": "ca23744c899d60d21bb6fcd565d138e2",
".git/objects/1a/b847b818dec389fb43fb9da80637c02e27d3d3": "8af286f2a069534106d53e8c037b0a4a",
".git/objects/2a/f1a4591e7994a16e74823f702182cf816197e5": "f79ca6bbdd84bee8264f4fdc4a281f9d",
".git/objects/2b/2c3a562b375d8b8666585df340e8f3868f38a8": "92a5ead6e841d0afb413c30b02850499",
".git/objects/3f/0001e8e902af34aa976b72a38e283ea96ac965": "b392cb0bec6974eeb7ff63b3a80eb5a9",
".git/objects/3f/7682a6e830e34f27e98a37d386fa63b2985df4": "1acac7a08041d4c873c649de6751474c",
".git/objects/50/f03e93e9a2d1ea8d822327eb6b33bc02d4d9c7": "d73e028a9b056a8f299961151f4aec8f",
".git/objects/54/3b9b35185bb1f019aefde1ac933845b0b7b6a2": "076c7391ea6c0d90ca0b33dd905ed063",
".git/objects/56/4330c72fd7954db6c878ba581dd2b2f8f2af43": "e9f6a77595f7252bba31169faf599591",
".git/objects/6f/2870d80ed8fc7f4b15b272b53175cf90ab87f9": "e928e00f2e9e14a994968882b842b790",
".git/objects/70/087a46625b7b156f9d380a0f4b58a878d9eb63": "0ae88358f3e2470769611fc40d3e0b0f",
".git/objects/72/88f4a91231ff91c43d1c557af057f7f39cb2dc": "7d6522bcfdd6cc8f25519c5510f62535",
".git/objects/74/7a344fa41fb31347016a5bebfe7eb8ffc92f03": "322aea04cc303bcbfff9716553f57de6",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7c/fb6f962bdb8c4b610bb1bb25b6c4361f9d20e8": "20235224869b650fc9ceb371e56bb5c9",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8d/b4fe57b64a9c2fccd038bd89540538e4418ba8": "129cab8956c0198d918b01cf528c3bb0",
".git/objects/97/8746b5424d1212460133977131fc5ef0971abb": "3cc094294d4d3275ff02b12eff5e10c3",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a5/c1e78ad79b546896b8b091ad9012f4a6d6cb25": "bacf20664299fc592b74d13011502c6d",
".git/objects/a6/9d788e13f974010313daf3fef1ac76f2bb33b5": "fbb11896c7d2cda94c361c5908c5239d",
".git/objects/a7/54c47e45dc71703836c530640fe8b711bc14b0": "107ab9b23dbc827fadc8723f5c255df4",
".git/objects/a9/58c01c5018a2bb26f32a5dfb237aae08c8c901": "f39f98fc5ee4e4f2e91a895358b18e4c",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/b4/65a94a98ada60f9a8833b8529f8d59c1d51957": "599345539d2c17f6b74b6f793af139d0",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/35288a2492255fbd7c29b68ee20f3c5d696bb3": "8cc1fae24990154630a1f20ef1b567d7",
".git/objects/c1/4eb3da10bb460d03da0c865776f99ccd2dbd65": "93b8a9617fe9a4121aa968d8351a2551",
".git/objects/c4/03e2eac00cd6f2e28513d3efd3f00d97663733": "0371ff772ecccc099820f000c6fbd3ca",
".git/objects/cc/5725b315760d100f6386e6bbf09af8fe57a9f1": "29c19352d2bee0821600856656c95791",
".git/objects/cd/22076013ce8b84475eae9bb4cd6c60b5460fbe": "81c620e2d6cbe5638d6c90ee25886389",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/dc/bbd8d8a1fcf4d75eb1157a1457b3b0b54c07cf": "82bd4a4a9ee345e55c0adae7c7824cb1",
".git/objects/de/28db843d7df6ed23b8a7526f6b6b4a83425fe7": "797e4f7b3d8dced098c51679ff33e848",
".git/objects/e0/2012ca0a73da86edd7614aebdc24f350669305": "4cb516f7f367eb8387729d8cfc7cf9b2",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f6/cad1237f39b17770d66736a3f6d98d1266501a": "ed227f085df1fc7d14a5f69b3072b87b",
".git/objects/fa/cd093837c0678d09b1068c2f404d457004e501": "c3cbdfa0a7fc8bc5b4ef561af4f77486",
".git/refs/heads/main": "298fe79c981455c6a6d641dd9b2ef82b",
".git/refs/remotes/origin/main": "298fe79c981455c6a6d641dd9b2ef82b",
"assets/AssetManifest.json": "db841a47f3823190bf7550adbb78943e",
"assets/font/IndieFlower-Regular.ttf": "0841af952c807bdf56455b1addb4c7df",
"assets/FontManifest.json": "018b92a50c9ed2a7f58be7aa006f94f3",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/NOTICES": "5273a673bf95f0798566179b416828bd",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/shaders/ink_sparkle.frag": "21dba10ece2d682eabf3d2fa268a10ef",
"canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797",
"canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62",
"canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"icons/Icon-192.png": "cfae02e91c72720e83d13f6082550f61",
"icons/Icon-512.png": "faa23461d81cbd9ba233e73fb68aeb50",
"icons/Icon-maskable-192.png": "cfae02e91c72720e83d13f6082550f61",
"icons/Icon-maskable-512.png": "faa23461d81cbd9ba233e73fb68aeb50",
"icons/New%20folder/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/New%20folder/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/New%20folder/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/New%20folder/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "4fb2c693f4e890bb46c0b54d9f2a3421",
"/": "4fb2c693f4e890bb46c0b54d9f2a3421",
"main.dart.js": "43a4b81a664709f55e8bcc98f5a468ff",
"manifest.json": "e19ae34d0b4906d0cd4f61bab237e7c6",
"version.json": "8cbe92d8b33535d35a596c643e9599e8"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
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
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
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
