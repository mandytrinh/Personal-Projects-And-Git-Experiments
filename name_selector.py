import random
from random import shuffle
from tkinter import *
import tkinter.messagebox
import tkinter.font


class NameSelector:


    def __init__(self,master):
        frame = Frame(master)
        frame.pack()
        self.Lst = []
        self.nameLabel = Label(frame,text="Name")
        self.nameLabel.grid(row=0, column = 1)
        self.nameLabel.config(font=("-weight bold",20 ))

        self.entryField = Entry(frame)
        self.entryField.grid(row=1, column=1)


        self.addButton = Button(frame,text ="Add Name", command = self.addtoList)
        self.addButton.grid(rowspan=3, column =1)

        self.pickButton = Button(frame, text ="Select Random Winner", command = self.pickwinner)
        self.pickButton.grid(row = 6, rowspan=4, column= 1)

    def enterhere(self):
        return self.entryField.get()

    def addtoList(self):
        self.Lst.append(self.enterhere())
        self.entryField.delete(0, 99)


    def pickwinner(self):
        random.shuffle(self.Lst)
        if self.Lst == []:
            tkinter.messagebox.showinfo("Oh No", "There's no name left")
        else:
            name = self.Lst.pop()

            tkinter.messagebox.showinfo("Winner is", name)



root = Tk()
App = NameSelector(root)
root.mainloop()