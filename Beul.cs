using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Galgje
{
   public class Beul
    {
        private string raadWoord;
        private string hetWoord;
        private int foutTeller = 0;

        public Beul(string raadWoord) {
            this.raadWoord = raadWoord;
            this.hetWoord = new string('.', raadWoord.Length);
        }
        public void PrintPuntjes() {
            Console.WriteLine(hetWoord);        
        }
        private void VulLetterIn(string letter) {            
            for (int i = 0; i < raadWoord.Length; i++)
            {
                if (raadWoord[i].ToString() == letter)
                {
                    StringBuilder sb = new StringBuilder(hetWoord);
                    sb[i] = letter[0];
                    hetWoord = sb.ToString();
                }
            }
            Console.WriteLine(hetWoord);
        }
        public string VerwerkLetter(string letter) {
            if (raadWoord.IndexOf(letter) != -1)
            {
                Console.WriteLine("De letter zit er in!");
                VulLetterIn(letter);
                if (hetWoord.IndexOf('.') == -1) return "gewonnen!";
            }
            else
            {
                Console.WriteLine("Fout!");
                foutTeller++;
                if (foutTeller == 13) return "verloren!";
                Console.WriteLine("U mag nog {0} maken", 13 - foutTeller);
            }
            return "onbepaald";
        }    
    }
}
