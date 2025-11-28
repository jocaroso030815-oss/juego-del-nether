player.onChat("start", function () {
    gameplay.setGameMode(
    SURVIVAL,
    mobs.target(NEAREST_PLAYER)
    )
    gameplay.setDifficulty(NORMAL)
    loops.pause(1000)
    blocks.fill(
    NETHER_BRICK,
    pos(-20, -1, -59),
    pos(20, -1, 1),
    FillOperation.Replace
    )
    blocks.fill(
    NETHER_WART_BLOCK,
    pos(-20, -4, -33),
    pos(20, -1, 1),
    FillOperation.Replace
    )
    blocks.fill(
    WATER,
    pos(-19, -3, -21),
    pos(19, -1, -29),
    FillOperation.Replace
    )
    blocks.fill(
    BEACON,
    pos(-39, -3, -21),
    pos(39, -3, -29),
    FillOperation.Replace
    )
    blocks.fill(
    SOUL_SAND,
    pos(-19, -1, -18),
    pos(19, 5, -18),
    FillOperation.Replace
    )
    blocks.fill(
    OBSIDIAN,
    pos(-19, -1, -33),
    pos(19, 5, -33),
    FillOperation.Replace
    )
})
