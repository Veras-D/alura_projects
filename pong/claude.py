config.BOLL_POS_X += config.SPEED_X * config.ACER
config.BOLL_POS_Y += config.SPEED_Y * config.ACER
config.ADVS_POS_Y += config.ADVS_SPEED

if config.BOLL_POS_X <= 0 or config.BOLL_POS_X >= config.SCREEN_WIDTH - config.BOLL_WIDTH:
    config.BOLL_POS_X = config.SCREEN_WIDTH // 2 - config.BOLL_WIDTH // 2
    config.BOLL_POS_Y = config.SCREEN_HEIGHT // 2 - config.BOLL_HEIGTH // 2
    config.ACER = 6
    config.SPEED_X, config.SPEED_Y = config.speed_fun()

    if config.BOLL_POS_X <= 0:
        config.PLAYER_POINTERS += 1
    if config.BOLL_POS_X >= config.SCREEN_WIDTH - config.BOLL_WIDTH:
        config.ADVS_POINTERS += 1

font = pygame.font.Font(None, 36)
text_player = font.render(str(config.PLAYER_POINTERS), True, config.WHITE)
text_adversario = font.render(str(config.ADVS_POINTERS), True, config.WHITE)

text_player_rect = text_player.get_rect()
text_adversario_rect = text_adversario.get_rect()
text_player_rect.center = (config.SCREEN_WIDTH // 2 + 20, 30)
text_adversario_rect.center = (config.SCREEN_WIDTH // 2 - 20, 30)

window.blit(text_player, text_player_rect)
window.blit(text_adversario, text_adversario_rect)
