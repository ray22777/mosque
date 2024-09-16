let pos2: Position = null
player.onItemInteracted(IRON_SHOVEL, function () {
    pos2 = player.position()
    custom.build(pos2)
})
