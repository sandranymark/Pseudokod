// G-Version - Split the Nota
// Skriv din pseudokod innanför nedanstående kommentarsblock



/*

FUNCTION SplitNota(summa, antal vänner, dricks):
    //Beräkna hur mycket var och en ska betala inklusive dricks
     totalsumma =  summa + (summa * dricksProcent)

    //Beräkna hur mycket var och en av vännerna ska betala
    beloppPerVän = totalSumma / antalVänner

    //Retunera det belopp var och en av vännerna ska betala
    returnera beloppPerVän
END FUNCTION

//SJÄLVA PROGRAMMET
PRINT "ange notans summa:"
läs in summa från användaren

IF summa < 0
    THEN PRINT "Nu blev det J*vligtfel, försök igen!"

PRINT "ange antalet vänner som ska dela på notan:"
läs in antalVänner från användaren

PRINT "ange hur mycket dricks ni vill ge i decimalform (t.ex. 0.10 för 10%):"
läs in drcksProcent från användaren

//CALCULATE SplitNota-funktionen och skriv ut reslutatet
resultat = SplitNota(summa, antalVänner, dricksProcent)
PRINT "Var och en av vännerna ska betala: " + resultat + "kr"
*/







// VG-Version - Lewis Carroll Word Puzzle
// Skriv din pseudokod innanför nedanstående kommentarsblock

/*


WELCOME TO THIS AMAZING DOUBLETS PUZZLE GAME..!
The puzzle consists of receiving a starting word and an ending word. 
Your objective is to transform the starting word into the ending word by replacing 
letters one at a time with as few changes as possible.

LET THE GAME BEGIN..!




FUNCTION PlayDoubletsPuzzleGame(startWord, endWord, dictionary):
    // If the startWord or endWord is not in the dictionary:
    IF the startWord is NOT IN dictionary OR endWord is NOT IN dictionary:
        PRINT "Either the start word or the end word is not in the dictionary."
        RETURN

    // If the length of startWord and the endWord is not the same:
    IF LENGTH(startWord) IS NOT EQUAL TO LENGTH(endWord):
        PRINT "The start word and the end word must be the same length, please try again."
        RETURN

    // If the startWord is the same as the endWord:
    IF startWord = endWord:
        PRINT "The start word and the end word cannot be the same, try again!."
        RETURN

    // Create an empty list to store the guessed words
    guessedWords = empty list []   

    // Add startWord to the list
    ADD startWord TO guessedWords

    // Loop until the last word in guessedWords is the same as the endWord:
    WHILE lastWordInList(guessedWords) IS NOT EQUAL TO endWord:
        // Ask the user for the next word
        PRINT "Please enter the next word:"
        nextWord = GET USER INPUT 

        // Validate the nextWord
        IF nextWord NOT IS IN dictionary OR
        !IS THE SAME LENGTH(nextWord, startWord) OR
        !HAS ONE LETTER CHANGED(lastWordInList(guessedWords), nextWord):
            PRINT "Invalid word, please try again."
        ELSE:

        // Add nextWord to the list
        ADD nextWord TO guessedWords
    END WHILE

    PRINT "Congratulations, you are a winer..! You've successfully transformed " + startWord + " into " + endWord + "!"
END FUNCTION

*/


