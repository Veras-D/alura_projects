import pygame
import sys
import config

pygame.init()

window = pygame.display.set_mode((config.SCREEN_WIDTH, config.SCREEN_HEIGHT))
pygame.display.set_caption('Pong Game')

running = True

while running:
    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            running = False
        
    keys = pygame.key.get_pressed()
    if keys[pygame.K_w]:
        if not config.PLAYER_POS_Y <= 0:
            config.PLAYER_POS_Y -= config.PLAYER_SPEED
        
    if keys[pygame.K_s]:
        if not config.PLAYER_POS_Y >= config.SCREEN_HEIGHT - config.CHAR_HEIGTH:
            config.PLAYER_POS_Y += config.PLAYER_SPEED

    config.BOLL_POS_X += config.SPEED_X * config.ACER
    config.BOLL_POS_Y += config.SPEED_Y * config.ACER
    
    config.ADVS_POS_Y += config.ADVS_SPEED
    
    # Colocar Biri-Biri como trilha  sonora para o jogo
    
    if  config.BOLL_POS_X <= 0 or config.BOLL_POS_X >= config.SCREEN_WIDTH - config.BOLL_WIDTH:
        config.BOLL_POS_X = config.SCREEN_WIDTH // 2 - config.BOLL_WIDTH // 2
        config.BOLL_POS_Y = config.SCREEN_HEIGHT // 2 - config.BOLL_HEIGTH // 2
        config.ACER = 6
        config.SPEED_X, config.SPEED_Y = config.speed_fun()

        if config.BOLL_POS_X <= 0:
            config.PLAYER_POINTERS += 1
        
        if config.BOLL_POS_X >= config.SCREEN_WIDTH - config.BOLL_WIDTH:
            config.ADVS_POINTERS += 1
        # Copiar esse trecho mudando da parede apara o player e o adversário e player
            # Usar essa parte também para aumentar a aceleração
            # Colocar som nessa parte?
    
    if  config.BOLL_POS_Y <= 0 or config.BOLL_POS_Y >= config.SCREEN_HEIGHT - config.BOLL_HEIGTH:
        config.SPEED_Y = -config.SPEED_Y
        
    if  config.ADVS_POS_Y <= 0 or config.ADVS_POS_Y >= config.SCREEN_HEIGHT - config.CHAR_HEIGTH:
        config.ADVS_SPEED = -config.ADVS_SPEED
    
    
    window.fill(config.BLACK)
    ball = pygame.draw.rect(window, config.WHITE, (config.BOLL_POS_X, config.BOLL_POS_Y, config.BOLL_WIDTH, config.BOLL_HEIGTH))
    player = pygame.draw.rect(window, config.WHITE, (config.PLAYER_POS_X, config.PLAYER_POS_Y, config.CHAR_WIDTH, config.CHAR_HEIGTH))
    adversary = pygame.draw.rect(window, config.WHITE, (config.ADVS_POS_X, config.ADVS_POS_Y, config.CHAR_WIDTH, config.CHAR_HEIGTH))
    
    for y in range(0, config.SCREEN_HEIGHT, config.DASH_LENGTH * 2):
        pygame.draw.line(window, config.WHITE, (config.SCREEN_WIDTH // 2, y), (config.SCREEN_WIDTH // 2, y + config.DASH_LENGTH), 2)
    
    if  ball.colliderect(player) or  ball.colliderect(adversary):
        config.SPEED_X = -config.SPEED_X
        config.ACER += 1
    
    # Desenha os pontos na tela
    font = pygame.font.Font(None, 36)  # Define a fonte e o tamanho do texto
    text_player = font.render(str(config.PLAYER_POINTERS), True, config.WHITE)  # Renderiza o texto do jogador
    text_adversario = font.render(str(config.ADVS_POINTERS), True, config.WHITE)  # Renderiza o texto do adversário
    
    # Define as posições dos textos na tela
    text_player_rect = text_player.get_rect()
    text_adversario_rect = text_adversario.get_rect()
    
    # Posiciona os textos na tela
    text_player_rect.center = (config.SCREEN_WIDTH // 2 + 20, 30)  # Posição do texto do jogador
    text_adversario_rect.center = (config.SCREEN_WIDTH // 2 - 20, 30)  # Posição do texto do adversário
    
    # Desenha os textos na tela
    window.blit(text_player, text_player_rect)
    window.blit(text_adversario, text_adversario_rect)
    
    pygame.display.update()
    
    pygame.time.Clock().tick(config.FPS)

pygame.quit()
sys.exit()
