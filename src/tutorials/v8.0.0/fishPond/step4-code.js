import { Application, Assets, Container, Sprite, Texture, TilingSprite } from 'pixi.js';

// Create a PixiJS application.
const app = new Application();

// Store an array of fish sprites for animation.
const fishes = [];

// Reference to the water overlay.
let overlay;

// Asynchronous IIFE
(async () =>
{
    await setup();
    await preload();

    addBackground();
    addFishes();

    addWaterOverlay();
    animateWaterOverlay();

    // Add the animation callbacks to the application's ticker.
    app.ticker.add((time) =>
    {
        animateFishes(time);
        animateWaterOverlay(time);
    });
})();

async function setup()
{
    // Intialize the application.
    await app.init({ background: '#1099bb', resizeTo: window });

    // Then adding the application's canvas to the DOM body.
    document.body.appendChild(app.canvas);
}

async function preload()
{
    // Create an array of asset data to load.
    const assets = [
        { alias: 'background', src: 'https://pixijs.com/assets/tutorials/pond_background.jpg' },
        { alias: 'fish1', src: 'https://pixijs.com/assets/tutorials/fish1.png' },
        { alias: 'fish2', src: 'https://pixijs.com/assets/tutorials/fish2.png' },
        { alias: 'fish3', src: 'https://pixijs.com/assets/tutorials/fish3.png' },
        { alias: 'fish4', src: 'https://pixijs.com/assets/tutorials/fish4.png' },
        { alias: 'fish5', src: 'https://pixijs.com/assets/tutorials/fish5.png' },
        { alias: 'overlay', src: 'https://pixijs.com/assets/tutorials/wave_overlay.png' },
        { alias: 'displacement', src: 'https://pixijs.com/assets/tutorials/displacemnet_map.png' },
    ];

    // Load the assets defined above.
    await Assets.load(assets);
}

function addBackground()
{
    // Create a background sprite.
    const background = Sprite.from('background');

    // Center background sprite anchor.
    background.anchor.set(0.5);

    /**
     * If the preview is landscape, fill the width of the screen
     * and apply horizontal scale to the vertical scale for a uniform fit.
     */
    if (app.screen.width > app.screen.height)
    {
        background.width = app.screen.width;
        background.scale.y = background.scale.x;
    }
    else
    {
        /**
         * If the preview is square or portrait, then fill the height of the screen instead
         * and apply the scaling to the horizontal scale accordingly.
         */
        background.height = app.screen.height;
        background.scale.x = background.scale.y;
    }

    // Position the background sprite in the center of the stage.
    background.x = app.screen.width / 2;
    background.y = app.screen.height / 2;

    // Add the background to the stage.
    app.stage.addChild(background);
}

function addFishes()
{
    // Create a container to hold all the fish sprites.
    const fishContainer = new Container();

    // Add the fish container to the stage.
    app.stage.addChild(fishContainer);

    const fishCount = 20;
    const fishAssets = ['fish1', 'fish2', 'fish3', 'fish4', 'fish5'];

    // Create a fish sprite for each fish.
    for (let i = 0; i < fishCount; i++)
    {
        // Cycle through the fish assets for each sprite.
        const fishAsset = fishAssets[i % fishAssets.length];

        // Create a fish sprite.
        const fish = Sprite.from(fishAsset);

        // Center the sprite anchor.
        fish.anchor.set(0.5);

        // Assign additional properties for the animation.
        fish.direction = Math.random() * Math.PI * 2;
        fish.speed = 2 + Math.random() * 2;
        fish.turnSpeed = Math.random() - 0.8;

        // Randomly position the fish sprite around the stage.
        fish.x = Math.random() * app.screen.width;
        fish.y = Math.random() * app.screen.height;

        // Randomly scale the fish sprite to create some variety.
        fish.scale.set(0.8 + Math.random() * 0.3);

        // Add the fish sprite to the fish container.
        this.fishContainer.addChild(fish);

        // Add the fish sprite to the fish array.
        this.fishes.push(fish);
    }
}

function animateFishes(time)
{
    // Extract the delta time from the Ticker object.
    const delta = time.deltaTime;

    // Define the padding around the stage where fishes are considered out of sight.
    const stagePadding = 100;
    const boundWidth = app.screen.width + stagePadding * 2;
    const boundHeight = app.screen.height + stagePadding * 2;

    // Iterate through each fish sprite.
    fishes.forEach((fish) =>
    {
        // Animate the fish movement direction according to the turn speed.
        fish.direction += fish.turnSpeed * 0.01;

        // Animate the fish position according to the direction and speed.
        fish.x += Math.sin(fish.direction) * fish.speed;
        fish.y += Math.cos(fish.direction) * fish.speed;

        // Apply the fish rotation according to the direction.
        fish.rotation = -fish.direction - Math.PI / 2;

        // Wrap the fish position when it goes out of bounds.
        if (fish.x < -stagePadding)
        {
            fish.x += boundWidth;
        }
        if (fish.x > app.screen.width + stagePadding)
        {
            fish.x -= boundWidth;
        }
        if (fish.y < -stagePadding)
        {
            fish.y += boundHeight;
        }
        if (fish.y > app.screen.height + stagePadding)
        {
            fish.y -= boundHeight;
        }
    });
}

function addWaterOverlay()
{
    /** -- INSERT CODE HERE -- */
}

function animateWaterOverlay(time)
{
    /** -- INSERT CODE HERE -- */
}
