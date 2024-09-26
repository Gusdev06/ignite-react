import { ThumbsUp, Trash } from 'phosphor-react';

export function Comment() {
  return (
    <>
      <div className="bg-gray_800">
        {' '}
        {/** COMMENT */}
        <img
          className="w-[calc(3rem+12px)]  h-[calc(3rem+12px)] rounded-lg border-4 border-gray_800 outline outline-2 outline-green_500"
          src="https://github.com/gusdev06.png"
          alt="Avatar"
        />
        {/** COMMENT BOX */}
        <div>
          {/** COMMENT CONTENT */}
          <div>
            <header>
              {/** Author and time */}
              <div>
                <strong>
                  Gustavo Gomes
                  <time
                    className="text-sm text-gray_400"
                    title="11 de Maio as 08:13"
                    dateTime="2024-05-11 08:13:00"
                  >
                    Cerca de 1h Átras
                  </time>
                </strong>
              </div>
              <button title="Deletar comentário">
                <Trash size={20} />
              </button>
            </header>
            <p>Muito bom Devon, parabens!!</p>
            <footer>
              <button>
                <ThumbsUp size={20} />
              </button>
            </footer>
          </div>
        </div>
      </div>
    </>
  );
}
