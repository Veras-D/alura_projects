import random

BLACK = (0, 0, 0)
WHITE = (255, 255, 255)

SCREEN_HEIGHT = 480
SCREEN_WIDTH = SCREEN_HEIGHT*2  # 640

CHAR_WIDTH = 50
CHAR_HEIGTH = 50

POS_X = SCREEN_WIDTH // 2 - CHAR_WIDTH // 2
POS_Y = SCREEN_HEIGHT // 2 - CHAR_HEIGTH // 2

def speed_fun():
    SPEED_X = random.randint(-1, 1)
    SPEED_Y = random.randint(-1, 1)

    if SPEED_X == 0 or SPEED_Y == 0:
        SPEED_X, SPEED_Y = speed_fun()
    
    return SPEED_X, SPEED_Y

SPEED_X, SPEED_Y = speed_fun()

FPS = 30